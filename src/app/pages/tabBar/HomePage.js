import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { COLOR } from '../../constant/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RoundIcon from '../../components/RoundIcon';


export default class HomePage extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <View style={styles.headerLeftContainer}>
              <TouchableHighlight style={styles.drawerButtonOutline}  onPress ={ ( ) => this.props.navigation.openDrawer()} underlayColor="#DDDDDD" >
              <Icon name='grid-view' size={16} color={COLOR.buttonColor} />
              </TouchableHighlight>
              <Image source={require('../../../../assets/logo.png')} style={{width: 140, height: 35}} />
            <View></View>
          </View>
          <View style={styles.headerRightContainer}>
          <TouchableHighlight style={styles.headerMyclassOutline}>
            <View style={{flexDirection:'row'}}>
              <RoundIcon size={18} color={'#005c29'}/>
              <Text style={{marginLeft:6, color:COLOR.buttonColor, fontSize:12}}>Classes</Text>
            </View>
          </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'12%',
    borderBottomColor:COLOR.lightGrey,
    borderWidth:.4,
    flexDirection:'row',
    // backgroundColor:'grey'
  },
  headerLeftContainer:{
    width:'65%',
    height:'100%',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'white',
    flexDirection:'row',
  },
  drawerButtonOutline:{
    width:30,
    height:30,
    borderWidth:1,
    borderRadius:3,
    borderColor:COLOR.lightGrey,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginRight:10
  },
  headerRightContainer:{
    width:'35%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  headerMyclassOutline:{
    borderColor:COLOR.buttonColor,
    borderRadius:3,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    width:90,
    height:32,
  }


})
