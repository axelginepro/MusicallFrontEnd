import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import {Button, FormLabel, FormInput, Divider, Text} from 'react-native-elements';
import Geocoder from 'react-native-geocoding';
import { Col, Row, Grid } from 'react-native-easy-grid';

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

      fetch('https://musicall1.herokuapp.com/addEvent', {

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
          coord: {
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

      <View style={styles.container}>


  <Row style={styles.row}>
      <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
</Row>

        <Text style={{color: 'red', fontSize: 35, marginTop: '10%'}}>Ajouter un événement</Text>
              <FormInput  inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({eventDate: text})} placeholder="Date" />
              <Divider style={{height:20}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({adresse: text})} placeholder="Adresse" />
              <Divider style={{height:20}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({name: text})} placeholder="Lieu" />
              <Divider style={{height:20}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({artist: text})} placeholder="Artiste" />
              <Divider style={{height:20}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({style: text})} placeholder="Style" />
              <Divider style={{height:20}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({price: text})} placeholder="Tarif" />
              <Divider style={{height:20}}/>
              <FormInput inputStyle={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({description: text})} placeholder="Description" />
              <Divider style={{height:50}}/>
        <Button
            buttonStyle={{borderRadius:25,width:200, marginTop:5}}
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
      form: {
        width: 250,
                borderColor: 'lightgrey',
                borderWidth: 2,
                fontSize: 30
        },
        row: {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '10%',
},
    });
