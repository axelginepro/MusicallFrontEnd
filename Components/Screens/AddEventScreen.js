import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import {Button, FormLabel, FormInput, Divider} from 'react-native-elements';

export default class AddEventScreen extends React.Component {
 constructor() {
      super();
      this.state = {
        event_date: '',
        adresse: '',
        name: '',
        artist: '',
        style: '',
        price: '',
        description: '',
        image: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

      fetch('http://https://musicall1.herokuapp.com/addEvent', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'event_date='+this.state.event_date+'&adresse='+this.state.adresse+'&name='+this.state.name+'&artist='+this.state.artist+'&style='+this.state.style+'&price='+this.state.price+'&description='+this.state.description
    }).then(function(response) {
      return response.json()
    }).then(function() {
    }).catch(function(error) {
      console.error(error);
    });
  }

  render() {
    return (
      <ScrollView>
      <Image  style={{width: 400, height: 400}} source={require('../../assets/Icons/musicall.png')}/>
      <View style={styles.container}>
      
            <FormInput  textAlign={'center'} onChangeText={(text) => this.setState({event_date: text})} placeholder="Date" />
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