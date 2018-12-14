import React from 'react';
import {View, Text} from 'react-native';

// import de ma navigation qui contient tous mes Screens
import Navigation from './Components/Navigation/Navigation';

// import de mes Reducers
import filter from './Components/Reducers/filter.reducer';
import eventList from './Components/Reducers/event.reducer';


// import de mes outils Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';


const store = createStore(combineReducers({filter, eventList}));

// Création de mon Store


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Navigation/>
      </Provider>
    )
  }
}
