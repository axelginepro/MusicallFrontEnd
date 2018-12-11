import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import {headerRight,headerLeft} from 'react-navigation'


const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeInterval: 200, distanceInterval: 1 };

import {connect} from 'react-redux';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    headerRight: (
      <Image source={require('../../assets/Icons/liste.png')}/>
    )
  }

  state={
    location: null,
    errorMessage: null,
    eventList: [],
  }

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
        // console.log(eventData);
        this.setState({
          location: data
        })
      })
      .catch(e => console.error(e));
    });
  };



  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    }

    if (this.state.location) {
      return (
        <View style={{flex: 1}}>
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
            coordinate={{latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude}}
          />

        </MapView>

        </View>
      );
    }
    else {
      return (
        <Text>Loading</Text>
      )
    }
  }
}
