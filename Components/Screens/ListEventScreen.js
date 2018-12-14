import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Icon, Item, Input} from 'native-base';

import {connect} from 'react-redux';

class ListEventScreen extends Component {

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
          <Text>{`Artiste:${event.artist}  style: ${event.style} `}</Text>
          <Text>{` le ${event.eventDate}  entrée ${event.price}`}</Text>
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
  render() {

    return (
        <Header noShadow style={{marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight, backgroundColor: '#FC8C3D'}}>
          <Left>
            <Button transparent onPress= { () => this.props.navigation.navigate('Filter')}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Right>

            <Button transparent>
              <Icon name='search' />
            </Button>

            <Item regular>
              <Input placeholder='Recherche ...'/>
            </Item>
          </Right>
        </Header>
    );
  }
}

function mapStateToProps(state) {
  return {
    eventList: state.eventList,
  };
}

export default connect(mapStateToProps, null)(ListEventScreen);
