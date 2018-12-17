import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Icon, Item, Input} from 'native-base';

import {connect} from 'react-redux';
import { Font } from 'expo';

class ListEventScreen extends Component {
  
    state = {
    fontLoaded: false,
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

  render() {

    var Iconbis = "../../assets/Icons/CrocheVide.png";
    var Icontris = "../../assets/Icons/CrocheCouleur.png";
    var photobis = "../../assets/Images/rockhome.jpg";

    var  eventList= this.props.eventList.map((event, i) =>
      <ListItem key={i} thumbnail>
        <Left>
          <Thumbnail square large source={require (photobis)}/>
        </Left>
        <Body>
          <Text style={styles.head}>{`Artiste:${event.artist}  style: ${event.style} `}</Text>
          <Text style={styles.head}>{` le ${event.eventDate.toString().substr(2, 8)}  entrée ${event.price}`}</Text>
        </Body>
        <Right>
            <Thumbnail source={require (Icontris)} />
        </Right>
      </ListItem>
    );
    return (

        <Container>
          <Headerbar navigation={this.props.navigation}/>
         <Content>
           <List>
             {eventList}
           </List>
         </Content>
       </Container>

    );
  }
}

class Headerbar extends Component {
    state = {
    fontLoaded: false,
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

  static navigationOptions = {
    header: null
  }
  render() {

    return (
          
        <Header noShadow style={{marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight, backgroundColor: 'white'}}>
          <Left>
            <Button transparent onPress= { () => this.props.navigation.navigate('Filter')}>
              <Icon style={{color:"black"}} name='menu'/>
            </Button>
          </Left>
          <Right>

            <Button transparent>
              <Icon style={{color:"black"}} name='search' />
            </Button>

            <Item regular>
              <Input style={styles.head} placeholder='Recherche ...'/>
            </Item>
          </Right>
        </Header> 
    );
  }
}

const styles = StyleSheet.create({
      head: {
        fontFamily:'RalewayRegular'            
      },

    });


function mapStateToProps(state) {
  return {
    eventList: state.eventList,
  };
}

export default connect(mapStateToProps, null)(ListEventScreen);
