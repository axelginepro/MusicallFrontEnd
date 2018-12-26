import React from 'react';
import { StyleSheet, View, ImageBackground, Image, ScrollView } from 'react-native';
import {Divider, Button, Text } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import { Icon } from 'native-base';
import { Font } from 'expo';

export default class InfoScreen extends React.Component {
    state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      RalewayBlackItalic: require('../../assets/fonts/Raleway-BlackItalic.ttf'),
      RalewayLight: require('../../assets/fonts/Raleway-Light.ttf'),
      RalewayMedium: require('../../assets/fonts/Raleway-Medium.ttf'),
      RalewayRegular: require('../../assets/fonts/Raleway-Regular.ttf'),
      RalewayThin: require('../../assets/fonts/Raleway-Thin.ttf')
    })
    this.setState({
      fontLoaded: true
    })
  };
  render() {
    return (

<ImageBackground style={{flex:1}} source={require("../../assets/Images/piano.jpg")} resizeMode='stretch'>
  {this.state.fontLoaded? (
<Grid style={styles.row}>
              <Row>
            <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
      </Row>
          <Grid style={styles.contentTitle}>
              <Text style={styles.textColor} h2>Pour Information</Text>
          </Grid>

  <Grid  style={styles.contentView}>
        <Row onPress={() => {this.props.navigation.navigate('Filter')}}>
            <Ionicons name='ios-list' size={35} style={styles.icon} />
            <Text style={styles.textColor}  h4>Filtrer les événements</Text>
      </Row>
  </Grid>

    <Grid style={styles.contentView}>
        <Row onPress={() => {this.props.navigation.navigate('Map')}}>
              <Ionicons name='ios-map' size={35} style={styles.icon} />
              <Text style={styles.textColor}  h4> Map des évenéments</Text>
        </Row>
    </Grid>

    <Grid style={styles.contentView}>
        <Row onPress={() => {this.props.navigation.navigate('ListEvent')}}>
              <Ionicons name='ios-search' size={35} style={styles.icon} />
              <Text style={styles.textColor}  h4> Chercher un évenement</Text>
        </Row>
    </Grid>

    <Grid  style={styles.contentView}>
        <Row onPress={() => {this.props.navigation.navigate('AddEvent')}}>
                <Ionicons name="ios-add-circle-outline" size={35} style={styles.icon}/>
              <Text style={styles.textColor}  h4> Ajouter un Concert </Text>
        </Row>
    </Grid>


    <Grid style={styles.contentView}>
        <Row onPress={() => {this.props.navigation.navigate('Account')}}>
              <Ionicons name='ios-person' size={35} style={styles.icon} />
              <Text style={styles.textColor}  h4> Accéder à son compte</Text>
        </Row>
    </Grid>



      <Col style={styles.contentView}>
          <Image
        source={require('../../assets/Icons/CrocheCouleur.png')}
        style={{width: 75, height: 55}}
      />
          <Text  style={styles.textColor}  h4> Liker vos événements</Text>
        </Col>

</Grid> ) : null}
</ImageBackground>

    );
  }
};

var styles = StyleSheet.create({
contentView: {
  flex: 0.5,
  flexDirection: 'row',
  width: '100%',

},
contentTitle: {
  flex: 0.5,
  width: '100%',
  alignItems: 'center',
justifyContent: 'center',
marginBottom: '10%'
},
row: {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '10%',
},
icon: {
  justifyContent: 'center',
    alignItems: 'center',
    marginRight: '4%',
    marginLeft: '6%' ,
  color: 'black'
},
textColor: {
  color: 'red',
  fontFamily:'RalewayLight',
  fontWeight: "normal"
}
});
