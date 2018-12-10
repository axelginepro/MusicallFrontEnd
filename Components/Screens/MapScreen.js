import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';


const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeInterval: 200, distanceInterval: 1 };

import {connect} from 'react-redux';

export default class MapScreen extends React.Component {
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
      this.setState({
        location: data
      })
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
          />
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
