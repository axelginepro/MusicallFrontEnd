import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Content, Input, Item, Spinner} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeInterval: 200, distanceInterval: 1 };

import {connect} from 'react-redux';

class MapScreen extends Component {
  state={
    location: null,
    errorMessage: null,
    eventList: [],
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

  componentWillMount() {

      this._getLocationAsync();

  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.watchPositionAsync(GEOLOCATION_OPTIONS, data => {


      fetch('https://musicall1.herokuapp.com/listEvent')
      .then(response => response.json())
      .then(eventData => {
        this.setState({
          location: data,
          eventList: eventData.event
        })
        this.props.handleEventList(eventData.event)
      })
      .catch(e => console.error(e));
    });
  };



  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    }

    if (!this.props.filter.style1
      && !this.props.filter.style2
      && !this.props.filter.style3
      && !this.props.filter.style4
      && !this.props.filter.style5
      && !this.props.filter.style6
      && !this.props.filter.style7
      && !this.props.filter.style8
      && !this.props.filter.style9){
      var eventListPosition = this.props.eventList.map((event, i) =>{
        return (
        <Marker
          key={i}
          pinColor='red'
          coordinate={{latitude: event.coord.latitude, longitude: event.coord.longitude}}
          title={`Artiste: ${event.artist} | style: ${event.style}`}
          description={`${event.name} | le ${event.eventDate} à ${event.horaire} | entrée: ${event.price}€`}
        />)
      });
    } else {
        var eventListPosition = this.props.eventList.map((event, i) =>{
        if(
            this.props.filter.style1 == event.style
          || this.props.filter.style2 == event.style
          || this.props.filter.style3 == event.style
          || this.props.filter.style4 == event.style
          || this.props.filter.style5 == event.style
          || this.props.filter.style6 == event.style
          || this.props.filter.style7 == event.style
          || this.props.filter.style8 == event.style
          || this.props.filter.style9 == event.style) {
            return (
            <Marker
              key={i}
              pinColor='red'
              coordinate={{latitude: event.coord.latitude, longitude: event.coord.longitude}}
              title={`Artiste: ${event.artist} | style: ${event.style}`}
              horaire={`${event.name} | le ${event.eventDate} à ${event.horaire} | entrée: ${event.price}€`}
            />)}
        });
      }

    if (this.state.location) {
      return (
        <Container>
          <Headerbar navigation={this.props.navigation}/>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7'}}>

              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: this.state.location.coords.latitude,
                  longitude: this.state.location.coords.longitude,
                  latitudeDelta: 0.0200,
                  longitudeDelta: 0.0300,
                }}
              >

              <Marker
                pinColor='blue'
                title='Vous êtes ICI !'
                coordinate={{latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude}}
              />

              {eventListPosition}

            </MapView>

          </Col>


        </Grid>
      </Container>
      );
    }
    else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
          <Spinner color='#780D16' />
        </View>
      )
    }
  }
}

class Headerbar extends Component {
  render() {

    return (
        <Header noShadow style={{marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight, backgroundColor: 'white'}}>
          <Left>
            <Button transparent onPress= { () => this.props.navigation.navigate('Filter')}>
              <Ionicons name={"ios-menu"} size={25} color={"black"}/>
            </Button>
          </Left>
          <Right>
              <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
      head: {
      fontFamily:'RalewayRegular',
      fontSize: 20,
      width: 150,
      height: 40,
      },

    });


function mapDispatchToProps(dispatch){
  return {
    handleEventList : function(eventList){
      dispatch({
        type: 'eventData',
        event: eventList,
      })
    }
  }
}

function mapStateToProps(state) {
  console.log(state.filter);
  return {
    filter: state.filter,
    eventList: state.eventList
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(MapScreen);
