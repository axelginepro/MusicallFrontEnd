import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Icon, Item, Input} from 'native-base';



export default class ListEventScreen extends Component {
  render() {
    var Iconbis = "../../assets/Icons/CrocheCouleur.png"
    var photobis = "../../assets/Images/rockhome.jpg"
    return (

        <Container>
          <Headerbar navigation={this.props.navigation}/>
         <Content>
           <List>
             <ListItem thumbnail>
               <Left>
                 <Thumbnail square large source={require (photobis)}/>
               </Left>
               <Body>
                 <Text>Sankhadeep</Text>
                 <Text>Its time to build a difference . .</Text>
               </Body>
               <Right>
                   <Thumbnail source={require (Iconbis)} />
               </Right>
             </ListItem>
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
