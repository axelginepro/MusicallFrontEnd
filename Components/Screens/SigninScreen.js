import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image  } from 'react-native';
import {Divider, Button, FormLabel, FormInput } from 'react-native-elements'

export default class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
     
    };
  }

  handleSubmit = (value) => {
    fetch(`http://10.69.220.30:3000/signin?email=${this.state.email}&password=${this.state.password}`)
    .then(response => {
     	response.json()
    	console.log(response)
    }) 
    .then(data => {
    	console.log(data);
      // if (data.isUserExist) {
        // this.setState({error: null});
        this.props.navigation.navigate('Map');
      // } else {
        
      //   this.setState({error: 'login failed'});
      // }
    }).catch(error => console.error(error));
  };


  render() {
    return (
      <ImageBackground style={{flex:1}} source={require("../../assets/Images/rocksign.jpeg")}>
       <View style={{flex:1, justifyContent:"center", alignItems:"center", flexDirection: 'column',
        justifyContent: 'space-between'}}>

        <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')}/>

          <Text style={styles.titleText}>Sign in</Text>
            <FormLabel>Email</FormLabel>
	        <FormInput style={{backgroundColor:'#CD3C30'}} onChangeText={value => this.setState({email: value})}/>

	        <FormLabel>Password</FormLabel>
	        <FormInput onChangeText={value => this.setState({password: value})}/>

           <Button
             buttonStyle={{borderRadius:25, width:300, height:50, justifyContent: 'center', marginTop:10}}
             title="Submit"
             style={{flex:1}}
             backgroundColor='#5b6778'
             color='#FFFFFF'
             onPress={this.handleSubmit}
             >
           </Button>

       </View>
      </ImageBackground> 
    );
  }
}
var styles = StyleSheet.create({
  titleText: {
    fontSize:50,
    // fontFamily: 'Georgia',
    color:'#CD3C30',
  },
  formText:{
    backgroundColor:'#dadada',
    color:'#CD3C30'
  }
});