import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Content, Input, Item} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';


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

    var eventListPosition = this.state.eventList.map((event, i) =>
      <Marker
        key={i}
        pinColor='red'
        coordinate={{latitude: event.coord.latitude, longitude: event.coord.longitude}}
        title={`Artiste: ${event.artist} style: ${event.style}`}
        description={`${event.name} le ${event.eventDate} entrée ${event.price}`}
      />);

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
        <Text>Loading</Text>
      )
    }
  }
}

class Headerbar extends Component {
  render() {

    return (
        <Header noShadow style={{marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight, backgroundColor: '#FC8C3D'}}>
          <Left>
            <Button transparent onPress= { () => this.props.navigation.navigate('Filter')}>
              <Icon style={styles.head} name='menu'/>
            </Button>
          </Left>
          <Right>

            <Button transparent>
              <Icon style={styles.head}  name='search' />
            </Button>

            <Item regular>
              <Input style={styles.head} placeholder='Recherche ...'/>
            </Item>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
      head: {
        fontFamily:'RalewayRegular'            
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

export default connect (null, mapDispatchToProps)(MapScreen);
