import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Divider, ButtonGroup } from 'react-native-elements'

export default class FilterScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedIndexDate: 2,
      selectedIndexStyle1: 2,
      selectedIndexStyle2: 2,
      selectedIndexPrice: 2
    }
    this.updateIndexDate = this.updateIndexDate.bind(this)
    this.updateIndexStyle1 = this.updateIndexStyle1.bind(this)
    this.updateIndexStyle2 = this.updateIndexStyle2.bind(this)
    this.updateIndexPrice = this.updateIndexPrice.bind(this)
  }

  updateIndexDate(selectedIndexDate) {
    this.setState({selectedIndexDate})
  }
  updateIndexStyle1(selectedIndexStyle1) {
    this.setState({selectedIndexStyle1})
  }
  updateIndexStyle2(selectedIndexStyle2) {
    this.setState({selectedIndexStyle2})
  }
  updateIndexPrice(selectedIndexPrice) {
    this.setState({selectedIndexPrice})
  }


  render() {
    const buttonsDate = ['Aujourd\'hui', 'Cette semaine', 'Sous 15 jours']
    const buttonsStyle1 = ['Rock', 'Electro', 'Jazz', 'Variété']
    const buttonsStyle2 = ['Rap', 'Pop', 'Musique du monde', 'Reggae']
    const buttonsPrice = ['Non payant', 'Payant']
    const {selectedIndexDate} = this.state
    const {selectedIndexStyle1} = this.state
    const {selectedIndexStyle2} = this.state
    const {selectedIndexPrice}= this.state

    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={{textDecorationLine: 'underline'}}>Date</Text>
      <ButtonGroup
      onPress={this.updateIndexDate}
      selectedIndex={selectedIndexDate}
      buttons={buttonsDate}
      containerStyle={{height: 100}}
    />

      <Text style={{textDecorationLine: 'underline'}}>Style</Text>
      <ButtonGroup
      onPress={this.updateIndexStyle1}
      selectedIndex={selectedIndexStyle1}
      buttons={buttonsStyle1}
      containerStyle={{height: 100}}
    />
    <ButtonGroup
    onPress={this.updateIndexStyle2}
    selectedIndex={selectedIndexStyle2}
    buttons={buttonsStyle2}
    containerStyle={{height: 100}}
  />

      <Text style={{textDecorationLine: 'underline'}}>Tarif</Text>
      <ButtonGroup
      onPress={this.updateIndexPrice}
      selectedIndex={selectedIndexPrice}
      buttons={buttonsPrice}
      containerStyle={{height: 100}}
    />
    </View>

);
  }
}
