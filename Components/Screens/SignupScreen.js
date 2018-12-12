import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image  } from 'react-native';
import {Divider, Button, FormLabel, FormInput } from 'react-native-elements'

export default class SignupScreen extends React.Component {
  render() {
    return (
       <ImageBackground style={{flex:1}} source={require("../../assets/Images/rocksign.jpeg")}>
       <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Image  style={{width: 400, height: 400}} source={require('../../assets/Icons/musicall.png')}/>
        <Text style={styles.titleText}>Sign up</Text>

            <FormLabel >Pseudo</FormLabel>
            <FormInput  style={{backgroundColor:'#CD3C30'}} onChangeText={value => this.setState({email: value})}/>

            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={value => this.setState({password: value})}/>

            <FormLabel>Mot de passe</FormLabel>
            <FormInput onChangeText={value => this.setState({password: value})}/>
        

           <Button
             buttonStyle={{borderRadius:25, width:300, height:50, justifyContent: 'center', marginTop:10}}
             title="Devenir membre"
             style={{flex:1}}
             backgroundColor='#5b6778'
             color='#FFFFFF'
             onPress={ ()=> this.props.navigation.navigate('Map')}
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
    fontFamily: 'Georgia',
    color:'#CD3C30',
  }
  })
