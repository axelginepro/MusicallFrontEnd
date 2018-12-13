import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image  } from 'react-native';
import {Divider, Button, FormLabel, FormInput } from 'react-native-elements'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }



  handleSubmit = () => {
    fetch(`https://musicall1.herokuapp.com/signin?email=${this.state.email}&password=${this.state.password}`)
    .then(response => response.json())
    .then(data => {
    	console.log('je suis dans le fecth', data);
      if (data.isUserExist) {
        this.setState({error: null});
        this.props.navigation.navigate('Map');
      } else {
        this.setState({error: `Erreur d'identification, veuillez verifier vos identifiants`});
      }
    }).catch(error => console.error(error));
  };


  render() {
    return (
        <ImageBackground style={{flex:1}} source={require("../../assets/Images/rocksign.jpeg")} resizeMode='stretch'>

      <Grid style={styles.row}>
            <Row>
              <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
            </Row>

<Col style={styles.grille}>
              <Text style={styles.titleText}>Sign in</Text>
</Col>
<Col  >
            <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={text => this.setState({email: text})} placeholder="Email" placeholderTextColor='white'  />

	            <FormInput secureTextEntry={true} inputStyle={styles.form} textAlign={'center'} onChangeText={text => this.setState({password: text})} placeholder="Password" placeholderTextColor='white'  />
</Col>
      <Col>
              <Button
                  buttonStyle={{borderRadius:25, width:'100%', height: '50%', justifyContent: 'center', marginTop:'5%'}}
                    title="Submit"
                    style={{flex:1}}
                    backgroundColor='#5b6778'
                    color='#FFFFFF'
                    onPress={this.handleSubmit}>
              </Button>
              <Text style={{color: '#CD3C30'}}>{this.state.error}</Text>
</Col>
      </Grid>
  </ImageBackground>
    );
  }
}
var styles = StyleSheet.create({
  titleText: {
    fontSize:65,
    color:'#CD3C30',

  },
    form: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      color: 'red',
      borderColor: 'lightgrey',
      borderWidth: 2,
      fontSize: 30,
      width: 350,
      height: 75,
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
    height: '5%',
    marginBottom: '5%'
  }
});
