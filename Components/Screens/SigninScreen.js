import React from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Image} from 'react-native';
import {Divider, Button, FormLabel, FormInput } from 'react-native-elements'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';
import {connect} from 'react-redux';

class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: null,
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      RalewayBlackItalic: require('../../assets/fonts/Raleway-BlackItalic.ttf'),
      RalewayLight: require('../../assets/fonts/Raleway-Light.ttf'),
      RalewayMedium: require('../../assets/fonts/Raleway-Medium.ttf'),
      RalewayRegular: require('../../assets/fonts/Raleway-Regular.ttf'),
      RalewayThin: require('../../assets/fonts/Raleway-Thin.ttf')
    })
    this.setState({
      fontLoaded: true
    })
  }

  handleSubmit = () => {
    fetch(`https://musicall1.herokuapp.com/signin?email=${this.state.email}&password=${this.state.password}`)
    .then(response => response.json())
    .then(data => {
    	// console.log('je suis dans le fecth', data.user._id);
      if (data.isUserExist) {
        this.setState({
          error: null,
        });
        this.props.handleUserData(data.user._id);
        this.props.navigation.navigate('Map');

      } else {
        this.setState({error: `Erreur d'identification, veuillez verifier vos identifiants`});
      }
    }).catch(error => console.error(error));
  };


  render() {
    return (
      <ImageBackground style={{flex:1}} source={require("../../assets/Images/rocksign.jpeg")}   resizeMode='stretch'>
              {this.state.fontLoaded? (
              <Grid style={styles.row}>
                <Row>
                  <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
                </Row>
            <Col style={styles.grille}>
            </Col>

            <Col>
                <TextInput style={styles.form} keyboardType={'email-address'} textAlign={'center'} onChangeText={text => this.setState({email: text})} placeholder="Email" placeholderTextColor='white'  />
            </Col>

            <Col>
                <TextInput secureTextEntry={true} style={styles.form}  textAlign={'center'}  onChangeText={text => this.setState({password: text})} placeholder="Password" placeholderTextColor='white'  />
            </Col>

            <Col>
                <Button
                  buttonStyle={{borderRadius:25, width:180, height: 65, justifyContent: 'center', marginTop:10}}
                  title="Submit"
                  style={{flex:1}}
                  backgroundColor='#5b6778'
                  color='#FFFFFF'
                  onPress={this.handleSubmit}>
                </Button>
                  <Text style={{color: '#CD3C30'}}>{this.state.error}</Text>
              </Col>

              </Grid>
              ) : null}
      </ImageBackground>
      );
    }
  };



var styles = StyleSheet.create({
   titleText: {
    fontSize:65,
    color:'#CD3C30',
    fontFamily: 'RalewayRegular'

  },
    form: {
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'red',
        borderColor: 'lightgrey',
        borderWidth: 2,
        fontSize: 20,
        width: 350,
        height: 55,
        fontFamily: 'RalewayRegular',
  },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        marginBottom: '15%'

  },
    grille: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        marginTop: '10%'
  }
});

function mapDispatchToProps(dispatch){
  return {
    handleUserData : function(userId){
      dispatch({
        type: 'userData',
        userId: userId
      })
    }
  }
}


export default connect (null, mapDispatchToProps)(SignInScreen);
