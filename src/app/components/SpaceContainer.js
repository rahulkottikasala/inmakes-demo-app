
import React, { Component } from 'react'
import { View } from 'react-native'

export default class SpaceContainer extends Component {
  render() {
    return (
        <View style={{width: this.props.width ? this.props.width : 30, height:this.props.height ? this.props.height :30}} />
    )
  }
}
