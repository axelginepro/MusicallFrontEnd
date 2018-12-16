import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import {Divider, Button, Text } from 'react-native-elements'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';

export default class HomeScreen extends React.Component {
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

 
  <ImageBackground style={{flex:1}} source={require("../../assets/Images/rockhome.jpg")} resizeMode='stretch'>
{this.state.fontLoaded? (
    <Grid style={styles.row}>
        <Row>
        <Image style={{flex:1}} source={require('../../assets/Icons/musicall.png')} resizeMode="contain"/>
        </Row>
        

    
    <Col style={styles.row}>
    	 	 <Button
                large rightIcon={{name: 'arrow-right', type: 'font-awesome'}}
    	          buttonStyle={{borderRadius:25, width:250, height:65}}
                title="Sign in"
                backgroundColor='#5b6778'
                color='white'
                onPress={ ()=> this.props.navigation.navigate('SignIn')}>
            </Button>
            </Col>

    <Col>
            <Button
                large icon={{name: 'envira', type: 'font-awesome'}}
                buttonStyle={{borderRadius:25, width:250, height:65}}
                title="Sign up"
                backgroundColor='#5b6778'
                color='white'
                onPress={ ()=> this.props.navigation.navigate('SignUp')}>
            </Button>
      </Col>
            
      </Grid>
            ) : null} 
            <Text style={styles.txt}  onPress= { ()=> this.props.navigation.navigate('Map')} h3>Pour Naviguer</Text>
            <Text  onPress= { ()=> this.props.navigation.navigate('Filter')} h4>Go to Filter Mother Fucker</Text>
  
  </ImageBackground>

   
    );
  }
};

const styles = StyleSheet.create({
      row: {
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '10%',
          marginBottom: '5%'               
      }
    });
