import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { COLOR } from '../constant/Color'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ChapterCount extends Component {
  render() {
    color = this.props.color ? this.props.color : COLOR.buttonColor
    return (
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Icon name='radio-button-checked' size={13} color={color}/>
        <Text style={{fontSize:10, marginLeft:5, marginRight:20, color:color}}>{this.props.first}</Text>
        <Icon name='radio-button-checked' size={13} color={color}/>
        <Text style={{fontSize:10,  marginLeft:5, marginRight:20, color:color}}>{this.props.second}</Text>
      </View>
    )
  }
}
