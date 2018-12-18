import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
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


    if (!this.props.filter.style1 && !this.props.filter.style2
      && !this.props.filter.style3 && !this.props.filter.style4
      && !this.props.filter.style5 && !this.props.filter.style6
      && !this.props.filter.style7 && !this.props.filter.style8
      && !this.props.filter.style9){
        var  eventList= this.props.eventList.map((event, i) => {
          return(
          <ListItem key={i} thumbnail>
            <Left>
              <Thumbnail square large source={require (photobis)}/>
            </Left>
            <Body>
              <Text style={styles.head}>{`Artiste: ${event.artist}  style: ${event.style}`}</Text>
              <Text style={styles.head}>{` le ${event.eventDate}  entrée ${event.price}`}</Text>
            </Body>
            <Right>
                <Thumbnail source={require (Icontris)} />
            </Right>
          </ListItem>
        )}
      );
    } else {
        var  eventList= this.props.eventList.map((event, i) => {
        if(this.props.filter.style1 == event.style || this.props.filter.style2 == event.style
          || this.props.filter.style3 == event.style || this.props.filter.style4 == event.style
          || this.props.filter.style5 == event.style || this.props.filter.style6 == event.style
          || this.props.filter.style7 == event.style || this.props.filter.style8 == event.style
          || this.props.filter.style9 == event.style) {
            return(
            <ListItem key={i} thumbnail>
              <Left>
                <Thumbnail square large source={require (photobis)}/>
              </Left>
              <Body>
                <Text style={styles.head}>{`Artiste:${event.artist}  style: ${event.style} `}</Text>
                <Text style={styles.head}>{` le ${event.eventDate}  entrée ${event.price}`}</Text>
              </Body>
              <Right>
                  <Thumbnail source={require (Icontris)} />
              </Right>
            </ListItem>
          )}
        });
      }

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
              <Ionicons name={"ios-menu"} size={25} color={"black"}/>
            </Button>
          </Left>
          <Right>

            <Button transparent>
              <Ionicons name={"ios-search"} size={25} color={"black"}/>
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
      fontFamily:'RalewayRegular',

      },

    });


function mapStateToProps(state) {
  console.log(state.filter);
  return {
    eventList: state.eventList,
    filter: state.filter
  };
}

export default connect(mapStateToProps, null)(ListEventScreen);
