import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import {Divider, Button, } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  render() {
    return (
    <ImageBackground style={{flex:1}} source={require("../../assets/Images/rockhome.jpg")}>
      <View>
       <Image  style={{width: 400, height: 400, marginTop:5}} source={require('../../assets/Icons/musicall.png')}/>
    	 	<Button
    	 	 buttonStyle={{borderRadius:25, width:300, height:50, justifyContent: 'center'}}
             title="Sign in"
             style={{width:300}}
             backgroundColor='#dadada'
             color='#CD3C30'
             onPress={ ()=> this.props.navigation.navigate('SignIn')}
             >
           </Button>
         
           <Button
             buttonStyle={{borderRadius:25, width:300, height:50, justifyContent: 'center', marginTop:10}}
             title="Sign up"
             style={{flex:1}}
             backgroundColor='#dadada'
             color='#CD3C30'
             onPress={ ()=> this.props.navigation.navigate('SignUp')}
             >
           </Button>

       </View>
      </ImageBackground> 
    );
  }
};
;




