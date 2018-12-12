import React from 'react';
import { StyleSheet,View, ImageBackground, Image  } from 'react-native';
import {Divider, Button, FormLabel, FormInput, Text } from 'react-native-elements'

export default class SignupScreen extends React.Component {
	 constructor() {
    super();
    this.state = {
      pseudo: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <ImageBackground style={{flex:1}} source={require("../../assets/Images/rocksign.jpeg")} resizeMode='stretch'>
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Divider style={{height:20}}/>
                    <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="center"/>
      <Divider style={{height:10}}/>
            <Text style={styles.titleText}>Sign up</Text>
      <Divider style={{height:100}}/>
            <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({artist: text})} placeholder="Pseudo" placeholderTextColor='white'  />
      <Divider style={{height:25}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({artist: text})} placeholder="Email" placeholderTextColor='white'  />
      <Divider style={{height:25}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({artist: text})} placeholder="Password" placeholderTextColor='white'  />
      <Divider style={{height:25}}/>
            <Button
                buttonStyle={{borderRadius:25, width:250, height:65, justifyContent: 'center', marginTop:10}}
                title="Devenir membre"
                style={{flex:1}}
                backgroundColor='#5b6778'
                color='#FFFFFF'
                onPress={this.handleSubmit}>
              </Button>
      <Divider style={{height:50}}/>
            <Text style={{color: 'white'}}>Already have an account ?</Text><Text style={{color: 'white'}}
                onPress={() => this.props.navigation.navigate('SignIn')}>
                              Sign In
            </Text>
      <Divider style={{height:50}}/>
              <Text style={{color: 'white'}}>By creating an account, you agree to our Terms</Text>
      <Divider style={{height:75}}/>
  </View>
</ImageBackground>
    );
  }
};
var styles = StyleSheet.create({
  titleText: {
    fontSize:65,
    color:'#CD3C30',
  }, form: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'red',
    borderColor: 'lightgrey',
    borderWidth: 2,
    fontSize: 30,
    width: 350,
    height: 75,
  },
  })
