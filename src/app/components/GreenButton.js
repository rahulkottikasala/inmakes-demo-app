import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { COLOR } from '../constant/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class GreenButton extends Component {
  render() {
    return (
        <View>
      <TouchableHighlight
        style={{
          backgroundColor: COLOR.buttonColor,
          borderRadius: 7,
          marginTop: 10,
          marginHorizontal: 20,
          height: 65,
          alignItems: 'center',
          // justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View style={{ flexDirection: 'row',alignItems:'center'}}>
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: this.props.bgColor ? this.props.bgColor : '#3ec97d',
              marginLeft: 18,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="notifications" size={22} color={'white'} />
          </View>
          <Text style={{marginLeft:15, fontSize:14, fontWeight:'500', color:'white' }}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
          <Icon style={{marginLeft:100, position:'absolute', top:30,right:40}} name={this.props.icon ? this.props.icon : 'refresh'} size={22} color={'white'}/>
          </View>
    );
  }
}
