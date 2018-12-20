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
    // for (var i = 1; i< photosbis.length; i++) {

    var photobis = require ("../../assets/Images/eventphoto14.png");

    if (!this.props.filter.style1 && !this.props.filter.style2
      && !this.props.filter.style3 && !this.props.filter.style4
      && !this.props.filter.style5 && !this.props.filter.style6
      && !this.props.filter.style7 && !this.props.filter.style8
      && !this.props.filter.style9) {
        var eventList = this.props.eventList.map((event, i) => {
          for (var j = 0; j < this.props.eventLike.length; j++) {
              if(event._id === this.props.eventLike[j].eventId) {

              return <EventListItem key={i}
                artist={event.artist}
                styleM={event.style}
                eventDate={event.eventDate}
                price={event.price}
                eventId={event._id}
                photo={photobis}
                name={event.name}
                description={event.description}
                handleEventLike={this.props.handleEventLike}
                islike={true}
                />
              }
          }
           return <EventListItem key={i}
            artist={event.artist}
            styleM={event.style}
            eventDate={event.eventDate}
            price={event.price}
            eventId={event._id}
            photo={photobis}
            name={event.name}
            description={event.description}
            handleEventLike={this.props.handleEventLike}
            islike={false}
            />
        });
    } else {
        var eventList = this.props.eventList.map((event, i) => {
        if (this.props.filter.style1 == event.style || this.props.filter.style2 == event.style
          || this.props.filter.style3 == event.style || this.props.filter.style4 == event.style
          || this.props.filter.style5 == event.style || this.props.filter.style6 == event.style
          || this.props.filter.style7 == event.style || this.props.filter.style8 == event.style
          || this.props.filter.style9 == event.style) {
            for (var j = 0; j < this.props.eventLike.length; j++) {
                if(event._id === this.props.eventLike[j].eventId) {

                return <EventListItem key={i}
                  artist={event.artist}
                  styleM={event.style}
                  eventDate={event.eventDate}
                  price={event.price}
                  eventId={event._id}
                  photo={photobis}
                  name={event.name}
                  description={event.description}
                  handleEventLike={this.props.handleEventLike}
                  islike={true}
                  />
                }
            }
             return <EventListItem key={i}
              artist={event.artist}
              styleM={event.style}
              eventDate={event.eventDate}
              price={event.price}
              eventId={event._id}
              photo={photobis}
              name={event.name}
              description={event.description}
              handleEventLike={this.props.handleEventLike}
              islike={false}
              />
          }
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
             <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
          </Right>
        </Header>
    );
  }
}

  class EventListItem extends Component {


    handleClickLike = () => {
      this.props.handleEventLike({...this.props, like:!this.props.islike})
    }

    render() {
     //var photobis = require ("../../assets/Images/sucre1.png");
      var Iconbis = require ("../../assets/Icons/CrocheNoire2.png");

      if (this.props.islike) {
        Iconbis = require ("../../assets/Icons/CrocheCouleur.png");
      }

    return (
      <ListItem
        thumbnail
        onPress={this.handleClickLike}>
        <Left>
          <Thumbnail square large source={this.props.photo}/>
        </Left>
        <Body>
          <Text style={styles.titleText}>{`Artiste: ${this.props.artist}`}</Text>
          <Text style={styles.titleText}>{`Style: ${this.props.styleM}`}</Text>
          <Text style={styles.head}>{`le ${this.props.eventDate} à ${this.props.description} `}</Text>
          <Text style={styles.head}>{`${this.props.name} entrée ${this.props.price}€`}</Text>
          <Text style={{display: 'none'}}>{this.props.eventId}</Text>
        </Body>
        <Right>
            <Thumbnail source={Iconbis} />
        </Right>
      </ListItem>);
  }
  }

const styles = StyleSheet.create({
      head: {
        fontFamily:'RalewayRegular',
      },
      search:{
        fontFamily:'RalewayRegular',
        fontSize: 20,
        width: 150,
        height: 40
      },
      titleText :{
        fontWeight: "bold"
      }

    });


function mapDispatchToProps(dispatch) {
  return {
    handleEventLike : function(eventLike) {
      dispatch({
        type: 'eventLiked',
        eventLike
      })
    }
  }
}

function mapStateToProps(state) {
  return {
    eventList: state.eventList,
    filter: state.filter,
    eventLike: state.eventLike
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEventScreen);
