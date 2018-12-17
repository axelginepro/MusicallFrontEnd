import React from 'react';
import {StyleSheet, View, Platform, StatusBar} from 'react-native';
import {Divider, CheckBox } from 'react-native-elements';
import { Container, Header, Content, DatePicker, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {connect} from 'react-redux';
import { Font } from 'expo';

class FilterScreen extends React.Component {


  constructor() {
    super();
    this.state = {
      checkedDate1: false,
      checkedDate2: false,
      checkedDate3: false,
      checkedStyle1: false,
      checkedStyle2: false,
      checkedStyle3: false,
      checkedStyle4: false,
      checkedStyle5: false,
      checkedStyle6: false,
      checkedStyle7: false,
      checkedStyle8: false,
      checkedStyle9: false,
      checkedPrice1: false,
      checkedPrice2: false,
      chosenDate: new Date(),
      fontLoaded: false
    };
    this.setDate = this.setDate.bind(this)
  }

  async componentDidMount() {
    await Font.loadAsync({
      RalewayBlackItalic: require('../../assets/fonts/Raleway-BlackItalic.ttf'),
      RalewayLight: require('../../assets/fonts/Raleway-Light.ttf'),
      RalewayMedium: require('../../assets/fonts/Raleway-Medium.ttf'),
      RalewayRegular: require('../../assets/fonts/Raleway-Regular.ttf'),
      RalewayThin: require('../../assets/fonts/Raleway-Thin.ttf'),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }
    )
    this.setState({
      fontLoaded: true
    })
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate })
  }


  render() {
    var maintenant=new Date();
    var jour=maintenant.getDate();
    var mois=maintenant.getMonth();
    var an=maintenant.getFullYear();

    return (
      <Container style ={{marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight}}>
      {this.state.fontLoaded? (

        <Grid style={{margin: 0}}>

            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,backgroundColor: '#1C1F33'}}>
        <Text style={styles.txt}>STYLES</Text>
      </Col>



      <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>

        <CheckBox
        center
        title="Rock"
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle1}
        onPress= {value => this.setState({checkedStyle1: !this.state.checkedStyle1})}
        />
        <CheckBox
        center
        title='Jazz'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle2}
        onPress= {value => this.setState({checkedStyle2: !this.state.checkedStyle2})}
        />
        <CheckBox
        center
        title='Variété'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle3}
        onPress= {value => this.setState({checkedStyle3: !this.state.checkedStyle3})}
        />
      </Row>


      <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
        <CheckBox
        center
        title='Rap'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle4}
        onPress= {value => this.setState({checkedStyle4: !this.state.checkedStyle4})}
        />
        <CheckBox
        center
        title='Reggae'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle5}
        onPress= {value => this.setState({checkedStyle5: !this.state.checkedStyle5})}
        />
        <CheckBox
        center
        title='Electro'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle6}
        onPress= {value => this.setState({checkedStyle6: !this.state.checkedStyle6})}
        />
      </Row>



          <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
        <CheckBox
        center
        title='World Music'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle7}
        onPress= {value => this.setState({checkedStyle7: !this.state.checkedStyle7})}
        />
        <CheckBox
        center
        title='Metal'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle8}
        onPress= {value => this.setState({checkedStyle8: !this.state.checkedStyle8})}
        />
        <CheckBox
        center
        title='Pop'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= 'red'
        containerStyle ={[styles.checkbox]}
        checked={this.state.checkedStyle9}
        onPress= {value => this.setState({checkedStyle9: !this.state.checkedStyle9})}
        />
      </Row>


      <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,backgroundColor: '#1C1F33'}}>
      <Text style={styles.txt}>DATE DES EVENEMENTS</Text>
      </Col>





            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
              <DatePicker
                defaultDate={new Date(an, mois, jour-1)}
                minimumDate={new Date(an, mois, jour-1)}
                maximumDate={new Date(an, mois, jour+15)}
                locale={"fr"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={'Choisir une date'}
                textStyle={{ color: "grey" }}
                placeHolderTextStyle={{ fontFamily:'RalewayRegular', color: "#d3d3d3" }}
                onDateChange={this.setDate}
              />
            </Col>



            <Text
              style={{textAlign: "center",
            fontStyle: "italic"}}>
              {this.state.chosenDate.getDate() === jour ? null : "Evenement jusqu'au: " + this.state.chosenDate.toString().substr(4, 12)}
            </Text>



              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#1C1F33'}}>
            <Text style={styles.txt}>TARIF</Text>
          </Col>

              <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
            <CheckBox
            center
            title="Gratuit"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={[styles.checkbox]}
            checked={this.state.checkedPrice1}
            onPress= {value => this.setState({checkedPrice1: !this.state.checkedPrice1})}
            />
            <CheckBox
            center
            title='Payant'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={[styles.checkbox]}
            checked={this.state.checkedPrice2}
            onPress= {() => this.setState({checkedPrice2: !this.state.checkedPrice2})}
            />
          </Row>

              <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <Button rounded grey
            onPress= {() => {
              this.props.saveFilter(this.state.checkedStyle1, this.state.checkedStyle2, this.state.checkedStyle3, this.state.checkedStyle4, this.state.checkedStyle5, this.state.checkedStyle6, this.state.checkedStyle7, this.state.checkedStyle8, this.state.checkedStyle9, this.state.checkedPrice1, this.state.checkedPrice2, this.state.chosenDate - new Date(an, mois, jour-1))
              this.props.navigation.navigate('Map');
            }}>
                <Text style={styles.txt}>Valider mes filtres</Text>
              </Button>
            </Row>
  </Grid>): null}


      </Container>

);
  }
}

var mapDispatchToProps = dispatch => {
  return {
    saveFilter: (checkedStyle1,  checkedStyle2, checkedStyle3, checkedStyle4, checkedStyle5, checkedStyle6, checkedStyle7, checkedStyle8, checkedStyle9, checkedPrice1, checkedPrice2, date) => {
      dispatch({
        type: 'save_filter',
        style1: checkedStyle1,
        style2: checkedStyle2,
        style3: checkedStyle3,
        style4: checkedStyle4,
        style5: checkedStyle5,
        style6: checkedStyle6,
        style7: checkedStyle7,
        style8: checkedStyle8,
        style9: checkedStyle9,
        price1: checkedPrice1,
        price2: checkedPrice2,
        date: date,


      });
    },
  };
};

const styles = StyleSheet.create({
checkbox: {
  margin: 5,
  marginLeft: 2,
  marginRight: 2,
  height: 50,
  justifyContent: 'center',
  backgroundColor: '#fafafa',
  borderColor: '#ededed',
  borderWidth: 1,
  padding: 0,
  borderRadius: 3,
  // fontFamily:'RalewayBlackItalic'
  },
  txt:{
    color:'white',
    // fontFamily:'RalewayRegular'
  },
});

export default connect(
    null,
    mapDispatchToProps
)(FilterScreen);
