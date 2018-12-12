import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {Divider, Button, Text } from 'react-native-elements'

export default class InfoScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
      <Image  style={{flex:0.1}} source={require('../../assets/Icons/musicall.png')} resizeMode="center"/>
      <Text h4> Personnaliser les évenements</Text>
      <Divider style={{height:20}}/>
      <Text h4> Réperer les évenements sur la carte</Text>
      <Divider style={{height:20}}/>
      <Text h4> Visualiser la liste de tout les événements</Text>
      <Divider style={{height:20}}/>
      <Text h4> Rajouter un nouvel élément</Text>
      <Divider style={{height:20}}/>
      <Text h4> Accéder à son compte</Text>
      <Divider style={{height:20}}/>
      <Text h4> Liker vos événements</Text>
      <Divider style={{height:20}}/>

      </View>
      </ScrollView>
    );
  }
}
