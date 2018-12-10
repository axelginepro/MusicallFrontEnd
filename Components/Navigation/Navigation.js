import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

// imports de mes composants de navigation
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';


import AccountScreen from '../Screens/AccountScreen';
import ListEventScreen from '../Screens/ListEventScreen';
import HomeScreen from '../Screens/HomeScreen';
import SigninScreen from '../Screens/SigninScreen';
import SignupScreen from '../Screens/SignupScreen';
import MapScreen from '../Screens/MapScreen';
import FilterScreen from '../Screens/FilterScreen';
import DetailEventScreen from '../Screens/DetailEventScreen';
import AddEventScreen from '../Screens/AddEventScreen';
import InfoScreen from '../Screens/InfoScreen';

const MainNavigator = createBottomTabNavigator({
  Map: MapScreen,
  ListEvent: ListEventScreen,
  AddEvent: AddEventScreen,
  Account: AccountScreen,
  Info: InfoScreen,
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      var iconName;
      if (navigation.state.routeName == 'MapScreen') {
        iconName = 'map';
      } else if (navigation.state.routeName == 'ListEventScreen') {
        iconName = 'search';
      } else if (navigation.state.routeName == 'AddEventScreen') {
        iconName = "add-circle-outline";
      } else if (navigation.state.routeName == 'AccountScreen') {
        iconName = 'contact';
      } else if (navigation.state.routeName == 'InfoScreen') {
        iconName = 'information-circle-outline';
      }

      return <Ionicons name={iconName} size={25} color={tintColor}/>;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#CD3C30',
    inactiveTintColor: 'gray'
  }
});

var StackNavigator = createStackNavigator({
  // pages de ma navigation sans bottom
  Home: HomeScreen,
  SignIn: SigninScreen,
  SignUp: SignupScreen,
  Filter: FilterScreen,

  // pages de ma nvigation avec le bottom créés juste avant
  MainNavigator: MainNavigator
})

export default Navigation = createAppContainer(StackNavigator);
