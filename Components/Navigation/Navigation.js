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
      var outline = (focused)
        ? ""
        : ""
      if (navigation.state.routeName == 'MapScreen') {
        iconName = 'ios-map';
      } else if (navigation.state.routeName == 'ListEventScreen') {
        iconName = 'ios-search';
      } else if (navigation.state.routeName == 'AddEventScreen') {
        iconName = "ios-add-circle-outline";
      } else if (navigation.state.routeName == 'AccountScreen') {
        iconName = 'ios-information-circle'
      } else if (navigation.state.routeName == 'InfoScreen') {
        iconName = 'ios-information-circle-outline';
      }

      return <Ionicons name={iconName + outline} size={25} color={tintColor}/>;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#780D16',
    inactiveTintColor: 'gray',
    style: {
    backgroundColor: 'FC8C3D',
  },

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
},{headerMode: "none"})

export default Navigation = createAppContainer(StackNavigator);
