import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, } from 'react-native';
import {Divider, Button, Text } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
  <ImageBackground style={{flex:1}} source={require("../../assets/Images/rockhome.jpg")}>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
        <Image  style={{flex:0.2}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
    <Divider style={{height:150}}/>
    	 	 <Button
                large rightIcon={{name: 'arrow-right', type: 'font-awesome'}}
    	          buttonStyle={{borderRadius:25, width:250, height:65}}
                title="Sign in"
                backgroundColor='#5b6778'
                color='white'
                onPress={ ()=> this.props.navigation.navigate('SignIn')}>
            </Button>
    <Divider style={{height:25}}/>
            <Button
                large icon={{name: 'envira', type: 'font-awesome'}}
                buttonStyle={{borderRadius:25, width:250, height:65}}
                title="Sign up"
                backgroundColor='#5b6778'
                color='white'
                onPress={ ()=> this.props.navigation.navigate('SignUp')}>
            </Button>
<Divider style={{height:150}}/>
            <Text  onPress= { ()=> this.props.navigation.navigate('Map')} h3>Pour Naviguer</Text>
            <Text  onPress= { ()=> this.props.navigation.navigate('Filter')} h4>Go to Filter Mother Fucker</Text>
        </View>
      </ImageBackground>
    );
  }
};
