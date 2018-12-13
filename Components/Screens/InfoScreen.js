import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {Divider, Button, Text, Icon } from 'react-native-elements';
// import { Container, Header, Content, Icon } from 'native-base';

export default class InfoScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
      <Image  style={{flex:0.1}} source={require('../../assets/Icons/musicall.png')} resizeMode="center"/>
      <Divider style={{height:50}}/>
  <View style={styles.contentView}>
          <Icon type="FontAwesome" name="home" />
          <Text h4>Personnaliser les events</Text>
        </View>
    <Divider style={{height:50}}/>

        <View style={styles.contentView}>
          <Icon type="FontAwesome" name="map-marker" />
          <Text h4> Réperer les évenements sur la carte</Text>
        </View>
      <Divider style={{height:50}}/>

        <View style={styles.contentView}>
          <Icon type="FontAwesome" name="search" />
          <Text h4> Visualiser la liste de tout les événements</Text>
        </View>
      <Divider style={{height:50}}/>

        <View style={styles.contentView}>
            <Icon type="FontAwesome" name="plus" />
          <Text h4> Rajouter un nouvel élément</Text>
        </View>
      
      <Divider style={{height:50}}/>

        <View style={styles.contentView}>
          <Icon name='account' />
          <Text h4> Accéder à son compte</Text>
        </View>
      
      <Divider style={{height:50}}/>

      <View style={styles.contentView}>
          <Icon name='home' />
          <Text h4> Liker vos événements</Text>
        </View>

      <Divider style={{height:50}}/>

      </View>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
contentView: {
  flex: 1,
  flexDirection: 'row',
}
});