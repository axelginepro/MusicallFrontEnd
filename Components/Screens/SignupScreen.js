import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image  } from 'react-native';
import {Divider, Button, FormLabel, FormInput } from 'react-native-elements'

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
  	fetch('http://10.69.220.30:3000/signup',{
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
       <ImageBackground style={{flex:1}} source={require("../../assets/Images/rocksign.jpeg")}>
       <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Image  style={{width: 400, height: 400}} source={require('../../assets/Icons/musicall.png')}/>
        <Text style={styles.titleText}>Sign up</Text>

            <FormLabel >Pseudo</FormLabel>
            <FormInput  style={{backgroundColor:'#CD3C30'}} onChangeText={(text) => this.setState({pseudo: text})}/>
            <FormLabel>Email</FormLabel>
           <FormInput onChangeText={(text) => this.setState({email: text})}/>

            <FormLabel>Mot de passe</FormLabel>
            <FormInput onChangeText={(text) => this.setState({password: text})}/>
        

           <Button
             buttonStyle={{borderRadius:25, width:300, height:50, justifyContent: 'center', marginTop:10}}
             title="Devenir membre"
             style={{flex:1}}
             backgroundColor='#5b6778'
             color='#FFFFFF'
             // onPress={ ()=> this.props.navigation.navigate('Map')}
             onPress={this.handleSubmit}
             >
           </Button>

       </View>
      </ImageBackground> 
    );
  }
};
var styles = StyleSheet.create({
  titleText: {
    fontSize:50,
    // fontFamily: 'Georgia',
    color:'#CD3C30',
  }
  })
