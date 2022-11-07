import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppTourComponent from '../../components/AppTourComponent';
import {COLOR} from '../../constant/Color';

export default class AppTourB extends Component {
  render() {
    return (
      <View style={{flex: 1,}}>
        <AppTourComponent
          image={
            'https://static6.depositphotos.com/1008303/626/i/600/depositphotos_6264811-stock-photo-asian-student-on-campus.jpg'
          }
          title={'App tour title'}
          desc={'The app tour description goes here.'}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonOutline}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('AppTourC')}>
              <Icon name="arrow-forward" size={22} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '15%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
  },
  buttonOutline: {
    backgroundColor:'white',
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'#b8b8b8',
    borderRadius:6,
  },
  button: {
    backgroundColor:COLOR.buttonColor,
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
  },
})
