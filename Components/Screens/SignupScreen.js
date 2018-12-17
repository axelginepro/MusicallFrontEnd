import React from 'react';
import { StyleSheet,View, ImageBackground, Image, ScrollView  } from 'react-native';
import {Divider, Button, FormLabel, FormInput, Text } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';

export default class SignupScreen extends React.Component {
   constructor() {
    super();
    this.state = {
      pseudo: '',
      email: '',
      password: '',
      fontLoaded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      RalewayBlackItalic: require('../../assets/fonts/Raleway-BlackItalic.ttf'),
      RalewayBold: require('../../assets/fonts/Raleway-ExtraBold.ttf'),
      RalewayExtraBold: require('../../assets/fonts/Raleway-Bold.ttf'),
      RalewayLight: require('../../assets/fonts/Raleway-Light.ttf'),
      RalewayMedium: require('../../assets/fonts/Raleway-Medium.ttf'),
      RalewayRegular: require('../../assets/fonts/Raleway-Regular.ttf'),
      RalewayThin: require('../../assets/fonts/Raleway-Thin.ttf')
    })
    this.setState({
      fontLoaded: true
    })
  }

  handleSubmit(){
    var ctx = this;
    fetch('https://musicall1.herokuapp.com/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'pseudo='+this.state.pseudo+'&email='+this.state.email+'&password='+this.state.password
   }).then(function(response) {
      return response.json()
    }).then(function(data) {
      if (data.user) {
        ctx.props.navigation.navigate('Map');
      } else {
        console.log('erreur');
      }
    }).catch(function(error) {
      console.error(error);
    });
  }




  render() {
    return (
    
      <ImageBackground style={{flex:1}} source={require("../../assets/Images/rockhome.jpg")} resizeMode='stretch'>
      {this.state.fontLoaded? (
<Grid style={styles.row}>
        <Row>
            <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
        </Row>

       <Col style={styles.grille}>
           
      </Col>

      <Col>
            <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({pseudo: text})} placeholder="Pseudo" placeholderTextColor='white'  />
      </Col>
      <Col>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({email: text})} placeholder="Email" placeholderTextColor='white'  />
      </Col>
      <Col>
              <FormInput secureTextEntry={true} inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({password: text})} placeholder="Password" placeholderTextColor='white'  />
       </Col>
      <Col>
            <Button 
                buttonStyle={{borderRadius:25, width:250, height:65, justifyContent: 'center', marginTop:10}}
                title="Devenir membre"
                style={{flex:1}}
                backgroundColor='#5b6778'
                color='#FFFFFF'
                onPress={this.handleSubmit}>
              </Button>
       </Col>
      <Col >
            <Text style={styles.bottom}>Already have an account ?</Text><Text style={styles.bottom}
                onPress={() => this.props.navigation.navigate('SignIn')}>
                              Sign In
            </Text>
      </Col>
      <Col>
              <Text style={styles.bottom}>By creating an account, you agree to our Terms</Text>
      </Col>
  </Grid>) : null}
</ImageBackground>

    );
  }
};
var styles = StyleSheet.create({
  titleText: {
    fontSize:65,
    color:'#CD3C30',
    fontFamily: 'RalewayRegular'
    
  }, form: {
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'red',
    borderColor: 'lightgrey',
    borderWidth: 2,
    fontSize: 20,
    width: 350,
    height: 55,
    fontFamily: 'RalewayRegular'
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
    grille: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    marginTop: '20%'
  },
  but:{
    fontFamily: 'RalewayRegular'
  },
  bottom:{
    color: 'black',
    textAlign: 'center',
    fontFamily: 'RalewayBlackItalic'

  }
  })
