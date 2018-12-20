import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView} from 'react-native';
import {Divider, Text } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Icon, Item, Input} from 'native-base';
import {connect} from 'react-redux';
import { Font } from 'expo';

class AccountScreen extends React.Component {
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
if (this.props.eventLiked) {
<<<<<<< HEAD
    var eventListLike = this.props.eventLiked.map((event, i) => <EventListItem key={i} artist={event.artist} styleM={event.styleM} eventDate={event.eventDate} price={event.price}
    description={event.description}
    handleEventLike={this.props.handleEventLike} like={true}  />);
}

if (this.props.addEvent) {
    var addEventList = this.props.addEvent.map((event, i) => <EventListItem key={i} artist={event.artist} styleM={event.style} eventDate={event.eventDate} price={event.price}
    description={event.description}
    handleEventLike={this.props.handleEventLike} like={true}  />);
=======
    var eventListLike = this.props.eventLiked.map((event, i) =>
    <EventListItem key={i}
      artist={event.artist}
      styleM={event.styleM}
      eventDate={event.eventDate}
      price={event.price}
      eventId={event.eventId}
      handleEventLike={this.props.handleEventLike}
      islike={true}  />);
}

if (this.props.addEvent) {
    var addEventList = this.props.addEvent.map((event, i) =>
    <EventListItem key={i}
      artist={event.artist}
      styleM={event.styleM}
      eventDate={event.eventDate}
      price={event.price}
      eventId={event.eventId}
      handleEventLike={this.props.handleEventLike}
      islike={true}  />);
>>>>>>> ListEventLike
}



    return (
      this.state.fontLoaded? (
<Container>

    <Content>

                <Row>
                      <Image  style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
                </Row>

              <Col style={styles.container}>
                  <Text style={styles.textColor} h4>Mes événements</Text>
              </Col>
              <Col style={styles.container}>
                  <Text style={styles.textColor} h4 >J'organise</Text>
            </Col>
                <List>
                  {addEventList}
              </List>
                  <Col style={styles.container}>
                    <Text style={styles.textColor} h4>Je participe</Text>
            </Col>
              {eventListLike}
    </Content>
</Container>
) : null
    );
  }
}




class EventListItem extends Component {

    handleClickLike = () => {
      this.props.handleEventLike({...this.props, like: !this.props.islike})
    }

    render() {
      var photobis = require ("../../assets/Images/rockhome.jpg");

<<<<<<< HEAD
        Iconbis = require ("../../assets/Icons/CrocheCouleur.png")
      
    return (
      < ListItem thumbnail onPress={this.handleClickLike} >
        
        <Left >
          <Thumbnail square large source={photobis}/>
        </Left>
        <Body>
          <Text style={styles.titleText}>{`Artiste: ${this.props.artist}`}
          </Text>
          <Text  style={styles.titleText}>{`Style: ${this.props.styleM}`}</Text>
          <Text style={styles.head}>{`le ${this.props.eventDate}à ${this.props.description}`}</Text>
          <Text style={styles.head}>{`entrée ${this.props.price}€`}
          </Text>
        </Body>
        <Right>
            <Thumbnail source={Iconbis} />
        </Right>
      </ListItem>);
=======

        var Iconbis = require ("../../assets/Icons/CrocheNoire2.png");

        if (this.props.islike) {
          Iconbis = require ("../../assets/Icons/CrocheCouleur.png");
        }

      return (
        <ListItem
          thumbnail
          onPress={this.handleClickLike}>
          <Left>
            <Thumbnail square large source={photobis}/>
          </Left>
          <Body>
            <Text style={styles.titleText}>{`Artiste: ${this.props.artist}`}</Text>
            <Text style={styles.titleText}>{`Style: ${this.props.styleM}`}</Text>
            <Text style={styles.head}>{`le ${this.props.eventDate}  `}</Text>
            <Text style={styles.head}>{`entrée ${this.props.price}€`}</Text>
            <Text style={{display: 'none'}}>{this.props.eventId}</Text>
          </Body>
          <Right>
              <Thumbnail source={Iconbis} />
          </Right>
        </ListItem>);
>>>>>>> ListEventLike
  }
  }

const styles = StyleSheet.create({
            container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      textColor: {
        color :'red',
        fontWeight: "normal"
      },
      titleText: {
        fontWeight: "bold"
      }
    });

function mapStateToProps(state) {
  console.log(state.eventLike);
  return {
    addEvent: state.addEvent,
    eventLiked: state.eventLike
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleEventLike: function (eventLike) {
      dispatch({
        type: 'eventLiked',
        eventLike
      })
    }
  }
}

    export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)
