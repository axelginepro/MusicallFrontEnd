import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import {Button, FormLabel, FormInput, Divider} from 'react-native-elements';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyCpwkK4H7BrdzwW-yEhyzR5i92R4JWR5yk');

export default class AddEventScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      eventDate: null,
      adresse: null,
      name: null,
      artist: null,
      style: null,
      price: null,
      description: null,
      image: null,
      coords: {
        latitude: null,
        longitude: null
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }





  handleSubmit() {
    const ctx = this
    Geocoder.from(this.state.adresse).then(json => {
      var location = json.results[0].geometry.location;
      console.log(location);
      fetch('http://10.69.220.30:3000/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventDate: this.state.eventDate,
          adresse: this.state.adresse,
          name: this.state.name,
          artist: this.state.artist,
          style: this.state.style,
          price: this.state.price,
          description: this.state.description,
          coords: {
            latitude: location.lat,
            longitude: location.lng
          }
        })
      }).then(function(response) {
        return response.json()
      }).then(function(eventData) {
        console.log(eventData);
        ctx.props.navigation.navigate('Map')
      }).catch(function(error) {
        console.error(error);
      });
    }).catch(error => console.warn(error))

  }

  render() {

    return (
      <ScrollView>
      <Image  style={{width: 400, height: 400}} source={require('../../assets/Icons/musicall.png')}/>
      <View style={styles.container}>

            <FormInput  textAlign={'center'} onChangeText={(text) => this.setState({eventDate: text})} placeholder="Date" />
            <Divider style={{height:20}}/>
            <FormInput textAlign={'center'} onChangeText={(text) => this.setState({adresse: text})} placeholder="Adresse" />
            <Divider style={{height:20}}/>
            <FormInput textAlign={'center'} onChangeText={(text) => this.setState({name: text})} placeholder="Lieu" />
            <Divider style={{height:20}}/>
            <FormInput textAlign={'center'} onChangeText={(text) => this.setState({artist: text})} placeholder="Artiste" />
            <Divider style={{height:20}}/>
            <FormInput textAlign={'center'} onChangeText={(text) => this.setState({style: text})} placeholder="Style" />
            <Divider style={{height:20}}/>
            <FormInput textAlign={'center'} onChangeText={(text) => this.setState({price: text})} placeholder="Tarif" />
            <Divider style={{height:20}}/>
            <FormInput textAlign={'center'} onChangeText={(text) => this.setState({description: text})} placeholder="Description" />
            <Divider style={{height:50}}/>
<Button
          style={{width:50, marginTop:50}}
          buttonStyle={{borderRadius:25}}
          title="Add Event"
          backgroundColor = "#2c3e50"
          onPress={this.handleSubmit}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    });
