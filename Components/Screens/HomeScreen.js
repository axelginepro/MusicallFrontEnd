import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Divider } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress= { ()=> this.props.navigation.navigate('Map')}>Hello</Text>
      <Text onPress= { ()=> this.props.navigation.navigate('Filter')}>Go to filter sa meure</Text>
      </View>
    );
  }
}
