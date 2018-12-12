import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, CheckBox } from 'react-native-elements';
import { Container, Header, Content, DatePicker, ListItem, Text, Radio, Right, Left, Button } from 'native-base';

export default class FilterScreen extends React.Component {

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
      chosenDate: new Date()
    };
    this.setDate = this.setDate.bind(this)
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
      <Container>

        <Content>
          <View style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "stretch",
          alignContent: "center",
          flexDirection: "row"
          }}>
          <Text style={{textDecorationLine: 'underline'}}>DATE DES EVENEMENTS</Text>
        </View>

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
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />

            <Text
              style={{textAlign: "center",
            fontStyle: "italic"}}>
              {this.state.chosenDate.getDate() === jour ? null : "Evenement jusqu'au: " + this.state.chosenDate.toString().substr(4, 12)}
            </Text>

            <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 15
            }}>
            <Text style={{textDecorationLine: 'underline'}}>STYLES</Text>
          </View>
            <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 15
            }}>
            <CheckBox
            center
            title="Rock"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle1}
            onPress= {value => this.setState({checkedStyle1: !this.state.checkedStyle1})}
            />
            <CheckBox
            center
            title='Jazz'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle2}
            onPress= {value => this.setState({checkedStyle2: !this.state.checkedStyle2})}
            />
            <CheckBox
            center
            title='Variété'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle3}
            onPress= {value => this.setState({checkedStyle3: !this.state.checkedStyle3})}
            />
            </View>
            <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 15
            }}>
            <CheckBox
            center
            title='Rap'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle4}
            onPress= {value => this.setState({checkedStyle4: !this.state.checkedStyle4})}
            />
            <CheckBox
            center
            title='Reggae'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle5}
            onPress= {value => this.setState({checkedStyle5: !this.state.checkedStyle5})}
            />
            <CheckBox
            center
            title='Electro'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle6}
            onPress= {value => this.setState({checkedStyle6: !this.state.checkedStyle6})}
            />
            </View>
            <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 15
            }}>
            <CheckBox
            center
            title='World Music'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle7}
            onPress= {value => this.setState({checkedStyle7: !this.state.checkedStyle7})}
            />
            <CheckBox
            center
            title='Metal'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle8}
            onPress= {value => this.setState({checkedStyle8: !this.state.checkedStyle8})}
            />
            <CheckBox
            center
            title='Pop'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedStyle9}
            onPress= {value => this.setState({checkedStyle9: !this.state.checkedStyle9})}
            />
            </View>


            <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 15
            }}>
            <Text style={{textDecorationLine: 'underline'}}>TARIF</Text>
          </View>
            <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 15
            }}>
            <CheckBox
            center
            title="Gratuit"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedPrice1}
            onPress= {value => this.setState({checkedPrice1: !this.state.checkedPrice1})}
            />
            <CheckBox
            center
            title='Payant'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= 'red'
            containerStyle ={{

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

            }}
            checked={this.state.checkedPrice2}
            onPress= {value => this.setState({checkedPrice2: !this.state.checkedPrice2})}
            />

            </View>
            <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "center",
            flexDirection: "row",
            marginTop: 10
          }}><Button rounded grey>
                <Text>Valider mes filtres</Text>
              </Button>
            </View>

        </Content>




      </Container>

);
  }
}
