import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
      <Text onPress= { ()=> this.props.navigation.navigate('Map')}>Hello</Text>
      </View>
    );
  }
}
