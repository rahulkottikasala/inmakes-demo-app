import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppTourComponent from '../../components/AppTourComponent';
import {COLOR} from '../../constant/Color';

export default class AppTourA extends Component {
  render() {
    return (
      <View style={{flex: 1,}}>
        <AppTourComponent
          image={
            'https://img.freepik.com/free-photo/young-man-with-glasses-standing-reading-book-against-blue-background_93675-135062.jpg?w=2000'
          }
          title={'App tour title'}
          desc={'The app tour description goes here.'}
        />
        <View style={styles.buttonContainer}> 
          <View style={styles.buttonOutline}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('AppTourB')}>
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
