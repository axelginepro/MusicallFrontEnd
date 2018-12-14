import React from 'react';
import {View, Text} from 'react-native';
import { Font } from 'expo';


// import de ma navigation qui contient tous mes Screens
import Navigation from './Components/Navigation/Navigation';

// import de mes Reducers


// import de mes outils Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Création de mon Store


export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}
