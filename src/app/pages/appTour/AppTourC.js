import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppTourComponent from '../../components/AppTourComponent';
import {COLOR} from '../../constant/Color';

export default class AppTourC extends Component {
  render() {
    return (
      <View style={{flex: 1,}}>
        <AppTourComponent
          image={
            'https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'
          }
          title={'App tour title'}
          desc={'The app tour description goes here.'}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonOutline}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('AppTourD')}>
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
