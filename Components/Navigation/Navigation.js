import React from 'react';
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

const MainBottomNavigator = createBottomTabNavigator({
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
      if (navigation.state.routeName == 'Map') {
          iconName = 'ios-map';
      } else if (navigation.state.routeName == 'ListEvent') {
        iconName = 'ios-search';
      } else if (navigation.state.routeName == 'AddEvent') {
        iconName = "ios-add-circle-outline";
      } else if (navigation.state.routeName == 'Account') {
        iconName = 'ios-person'
      } else if (navigation.state.routeName == 'Info') {
        iconName = 'ios-information-circle-outline';
      }

      return <Ionicons name={iconName + outline} size={25} color={tintColor}/>;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#780D16',
    inactiveTintColor: 'black',
    style: {
    backgroundColor: 'white'
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
  MainBottomNavigator: MainBottomNavigator
},{headerMode: "none"})

export default Navigation = createAppContainer(StackNavigator);
