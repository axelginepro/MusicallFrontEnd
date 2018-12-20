import React from 'react';
import { Image, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {Button, FormLabel, FormInput, Divider, Text} from 'react-native-elements';
import Geocoder from 'react-native-geocoding';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, DatePicker, Form, Item, Picker} from 'native-base';
import { Font } from 'expo';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

Geocoder.init('AIzaSyCpwkK4H7BrdzwW-yEhyzR5i92R4JWR5yk');

class AddEventScreen extends React.Component {
  constructor() {
    super();
    this.state = {

      adresse: '',
      name: '',
      artist: '',
      price: '',
      description: '',
      image: '',
      coords: {
        latitude: '',
        longitude: ''
      },
      fontLoaded: false,
      eventDate: new Date(),
      style: undefined,
      isVisible: false,
      chosenDate: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDate = this.setDate.bind(this)
  }
  onValueChange2(value) {
    this.setState({
      style: value
    });
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

 setDate(newDate) {
    this.setState({ eventDate: newDate.toString().substr(4, 12) })

 }

  handleSubmit() {
    const ctx = this
    Geocoder.from(this.state.adresse).then(json => {
      var location = json.results[0].geometry.location;

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
          //on utilise description pour afficher les horaires
          description: this.state.chosenDate,
          coord: {
            latitude: location.lat,
            longitude: location.lng
          }
        })
      }).then(function(response) {
        return response.json();
      }).then(function(eventData) {
        console.log(eventData.event);
        ctx.props.handleNewEvent(eventData.event);       
        console.log('setState')
        ctx.props.navigation.navigate('Map');
      }).catch(function(error) {
        console.error(error);
      });
    }).catch(error => console.warn(error));
  };

  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date);
    }
    return [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join('/');
  }

//datetimepicker
handlePicker = (datetime) => this.setState({
 isVisible:false,
 chosenDate: moment(datetime).format('HH:mm')});

hidePicker = () => this.setState({
 isVisible:false });

showPicker = () => this.setState({
 isVisible: true });

hidePicker = () => this.setState({ 
  isVisible: false});

showPicker  = () => this.setState({ 
  isVisible: true });

  render() {
   var maintenant = new Date();
   var jour = maintenant.getDate();
   var mois = maintenant.getMonth();
   var an = maintenant.getFullYear();

    return (
    <ScrollView>
    {this.state.fontLoaded? (
    <View style={styles.container}>
    <Row style={styles.row}>
      <Image style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
    </Row>
        <Text style={{fontFamily:'RalewayRegular', color: 'red', fontSize: 30, marginTop: '10%'}}>Ajouter un événement</Text>
          <Divider style={{height:20}}/>
            <Col style={styles.date}>
              <DatePicker
                  defaultDate={new Date(an, mois, jour-1)}
                  minimumDate={new Date(an, mois, jour-1)}
                  maximumDate={new Date(an, mois, jour+30)}
                  locale={"fr"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText={'Date'}
                  textStyle={{ color: "grey", textAlign: "center", flex: 1, alignItems: "center", justifyContent: "center"}}
                  placeHolderTextStyle={{ fontFamily:'RalewayRegular', color: "#d3d3d3" , fontSize: 15, textAlign: "center", textAlignVertical: "center", padding: 5}}
                  onDateChange={this.setDate}/>
            </Col>
          <Divider style={{height:20}}/>
            <Col style={styles.form}>            
               <TouchableOpacity onPress={this.showPicker} style={{color:"grey"}} >
                <Text style={{alignSelf: "center", margin:5, fontFamily:'RalewayRegular'}}>
                 Horaire {this.state.chosenDate}
                </Text>
               </TouchableOpacity>
                  <DateTimePicker
                  isVisible={this.state.isVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode={'time'}
                  is24Hour={true}/>
            </Col>
          <Divider style={{height:20}}/>
        <TextInput style={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({adresse: text})} placeholder="Adresse" value={this.state.text} />
          <Divider style={{height:20}}/>
        <TextInput style={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({name: text})} placeholder="Nom du Bar" value={this.state.text} />
           <Divider style={{height:20}}/>
        <TextInput style={styles.form} textAlign={'center'} onChangeText={(text) => this.setState({artist: text})} placeholder="Artiste" value={this.state.text} />
           <Divider style={{height:20}}/>
             <Form >
              <Item picker rounded >
                <Picker
                    style={{ width: 350, height: 30, borderWidth: 1, borderColor:"#d3d3d3", borderRadius:50}}
                    mode="dropdown"
                    placeholder="Style"
                    placeholderStyle={{flex:1, textAlign:"center", alignItems: 'center', color:"#d3d3d3", alignSelf: "center"}}
                    selectedValue={this.state.style}
                    onValueChange={this.onValueChange2.bind(this)}>
                  <Picker.Item label="Style" value="key0" />
                  <Picker.Item label="Jazz" value="Jazz" />
                  <Picker.Item label="Rock" value="Rock" />
                  <Picker.Item label="Metal" value="Metal" />
                  <Picker.Item label="Electro" value="Electro" />
                  <Picker.Item label="World Music" value="World Music" />
                  <Picker.Item label="Rap" value="Rap" />
                  <Picker.Item label="Reggae" value="Reggae" />
                  <Picker.Item label="Pop" value="Pop" />
                  <Picker.Item label="Variete" value="Variete" />
               </Picker>
              </Item>
             </Form>
           <Divider style={{height:20}}/>
            <TextInput style={styles.form} textAlign={'center'} keyboardType={'phone-pad'} onChangeText={(text) => this.setState({price: text})} placeholder="Tarif" value={this.state.tarif} />
           <Divider style={{height:50}}/>
        <Button
            buttonStyle={{borderRadius:25,width:200, marginTop:5}}
            title="Add Event"
            backgroundColor = "#2c3e50"
            onPress={this.handleSubmit}/>
        </View>) : null}
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
          borderRadius: 50,
          width: 350,
          borderColor: 'lightgrey',
          borderWidth: 2,
          fontSize: 15,
          fontFamily:'RalewayRegular',
          height: '5%'

        },
        date: {
          borderRadius: 50,
          width: 350,
          borderColor: 'lightgrey',
          borderWidth: 2,
          padding: 0,
          margin: 0,
          height: '5%',

        },
        row: {
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '10%',
        }
    });

function mapDispatchToProps(dispatch){
  return {
    handleNewEvent : function(newEvent){
      dispatch({
        type: 'newEvent',
        newEvent: newEvent,
      })
    }
  }
}

export default connect (null, mapDispatchToProps)(AddEventScreen)
