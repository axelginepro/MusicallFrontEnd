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
 if (!this.props.filter.style1 && !this.props.filter.style2
      && !this.props.filter.style3 && !this.props.filter.style4
      && !this.props.filter.style5 && !this.props.filter.style6
      && !this.props.filter.style7 && !this.props.filter.style8
      && !this.props.filter.style9) {
        var eventList = this.props.eventList.map((event, i) => <EventListItem key={i} artist={event.artist} styleM={event.style} eventDate={event.eventDate} price={event.price}/>);
    } else {
        var eventList = this.props.eventList.map((event, i) => {
        if (this.props.filter.style1 == event.style || this.props.filter.style2 == event.style
          || this.props.filter.style3 == event.style || this.props.filter.style4 == event.style
          || this.props.filter.style5 == event.style || this.props.filter.style6 == event.style
          || this.props.filter.style7 == event.style || this.props.filter.style8 == event.style
          || this.props.filter.style9 == event.style) {
            return <EventListItem key={i} artist={event.artist} styleM={event.style} eventDate={event.eventDate} price={event.price}/>
          }
        });
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
                  {eventList}
              </List>
                  <Col style={styles.container}>
                    <Text style={styles.textColor} h4>Je participe</Text>
            </Col>
              {eventList}
    </Content> 
</Container> 
) : null
    );
  }
}
class EventListItem extends Component {
    state = {
      like : false
    }
    handleClickLike = () => {

      this.setState({
        like: !this.state.like
      });
    }
    render() {
      var photobis = require ("../../assets/Images/rockhome.jpg");
      var Iconbis = require ("../../assets/Icons/CrocheNoire2.png");

      if (this.state.like) {
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
          <Text style={styles.titleText}>{`Artiste: ${this.props.artist}`}
          </Text>
          <Text  style={styles.titleText}>{`Style: ${this.props.styleM}`}</Text>
          <Text style={styles.head}>{`le ${this.props.eventDate}  `}</Text>
          <Text style={styles.head}>{`entrée ${this.props.price}€`}
          </Text>
        </Body>
        <Right>
            <Thumbnail source={Iconbis} />
        </Right>
      </ListItem>);
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
  console.log(state.filter);
  return {eventList: state.eventList, filter: state.filter};
}

    export default connect(mapStateToProps, null)(AccountScreen)
