import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {Divider, Button, Text } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import { Icon } from 'native-base';

export default class InfoScreen extends React.Component {
  render() {
    return (


<Grid style={styles.row}>
        <Row>
      <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
</Row>


  <Col  style={styles.contentView}>
          <Ionicons name='ios-list' size={35} style={styles.icon}/>
          <Text h4>Filtrer les events</Text>
        </Col>


        <Col style={styles.contentView}>
        <Ionicons name='ios-map' size={35} style={styles.icon} />
          <Text h4> Map des events </Text>
        </Col>


        <Col style={styles.contentView}>
          <Ionicons name='ios-search' size={35} style={styles.icon} />
          <Text h4> Chercher un event</Text>
        </Col>


        <Col style={styles.contentView}>
            <Ionicons name="ios-add-circle-outline" size={35} style={styles.icon} />
          <Text h4> Ajouter un Concert </Text>
        </Col>



        <Col style={styles.contentView}>
          <Ionicons name='ios-person' size={35} style={styles.icon} />
          <Text h4> Accéder à son compte</Text>
        </Col>



      <Col style={styles.contentView}>
          <Image
        source={require('../../assets/Icons/CrocheCouleur.png')}
        style={{width: 75, height: 75, }}
      />
          <Text h4> Liker vos événements</Text>
        </Col>

</Grid>

    );
  }
}
var styles = StyleSheet.create({
contentView: {
  flex: 0.5,
  flexDirection: 'row',
  width: '100%',

},
row: {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '10%',
},
icon: {
  marginRight: '6%',
  marginLeft: '7%',
}
});
