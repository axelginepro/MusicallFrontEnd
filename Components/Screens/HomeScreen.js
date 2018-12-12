import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import {Divider, Button, Text } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
    <ImageBackground style={{flex:1}} source={require("../../assets/Images/rockhome.jpg")}>
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
       <Image  style={{flex:0.15}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
       <Divider style={{height:150}}/>
    	 	<Button
    	 	 buttonStyle={{borderRadius:25, width:300, height:50}}
             title="Sign in"
             style={{width:300}}
             backgroundColor='#5b6778'
             color='#CD3C30'
             onPress={ ()=> this.props.navigation.navigate('SignIn')}
             >
           </Button>

           <Button
             buttonStyle={{borderRadius:25, width:300, height:50, justifyContent: 'center', marginTop:10}}
             title="Sign up"
             style={{flex:1}}
             backgroundColor='#5b6778'
             color='#CD3C30'
             onPress={ ()=> this.props.navigation.navigate('SignUp')}
             >
           </Button>
<Divider style={{height:150}}/>
            <Text  onPress= { ()=> this.props.navigation.navigate('Map')} h3>Hello</Text>
            <Text  onPress= { ()=> this.props.navigation.navigate('Filter')} h4>Go to filter sa mere</Text>

        </View>
      </ImageBackground>
    );
  }
};

