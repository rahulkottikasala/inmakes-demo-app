import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { COLOR } from '../constant/Color';

export default class CategoryContainer extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', height:45, marginBottom:20,borderColor:COLOR.transparantColor, borderBottomColor:COLOR.lightGrey, borderWidth:.2 }}>
        <View
          style={{
            width: 28,
            height: 28,
            borderWidth: 1,
            borderRadius: 3,
            borderColor:this.props.color ? this.props.color : COLOR.buttonColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Text style={{marginLeft:15, marginTop:4}}>{this.props.text}</Text>
      </View>
    );
  }
}
