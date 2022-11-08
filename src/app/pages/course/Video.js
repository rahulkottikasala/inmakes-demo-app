import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR } from '../../constant/Color';

export default class Video extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Image
            style={{ width: '100%', height: 200 }}
            source={{
              uri: 'https://motioncue.com/wp-content/uploads/2020/09/E-learning-Videos-2.jpg',
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View
              style={{
                marginLeft: 20,
                height: 50,
                width: '75%',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>
                Long Chapter Name Can be shown here
              </Text>
            </View>

            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="file-download" color={'white'} size={20} />
              <Text style={{ fontSize: 8, color: 'white' }}>Download</Text>
            </View>
          </View>
          <View
            style={{
              height: 50,
              //   alignItems: 'space-between',
              justifyContent: 'space-around',
              marginTop: 10,
              flexDirection: 'row',
              borderBottomColor: COLOR.borderColor,
              borderTopColor: COLOR.borderColor,
              borderWidth: 0.2,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="chevron-left" size={20} color={'grey'} />
              <Text style={{ color: 'grey', fontSize: 8 }}>Previous</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name="radio-button-checked"
                size={16}
                color={COLOR.buttonColor}
              />
              <Text
                style={{
                  color: COLOR.buttonColor,
                  fontSize: 8,
                  marginLeft: 4,
                }}>
                Part 1
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="chevron-right" size={20} color={'white'} />
              <Text style={{ color: 'white', fontSize: 8 }}>Next</Text>
            </View>
          </View>
        </View>
        <View style={styles.chatContainer}>
          <View
            style={{
              height: 50,
              paddingHorizontal: 15,
              backgroundColor: 'black',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 3,
              marginBottom: 10,
            }}>
            <Text style={{ width: '80%' }}>
              Your sample question can be shown here no matter how long
            </Text>
            <View
              style={{
                height: 35,
                width: 35,
                borderRadius: 35,
                overflow: 'hidden',
                marginLeft: 18,
              }}>
              <Image
                style={{ width: 35, height: 35 }}
                source={require('../../../../assets/Aaron.jpg')}
              />
            </View>
          </View>
          <View
            style={{
              height: 50,
              backgroundColor: COLOR.textFieldColor,
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom:10
            }}>
            <TextInput style={{ width: '75%', fontSize: 16, marginLeft: 15 }}  placeholder='Ask a question' placeholderTextColor={COLOR.borderColor} />
            <TouchableHighlight
              style={{
                width: 60,
                height: 38,
                backgroundColor: 'white',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: COLOR.mainColor,
                }}>
                Post
              </Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            style={{
              borderWidth: 1,
              borderColor: COLOR.buttonColor,
             
            }}>
            <View style={{ flexDirection: 'row',height:50, alignItems:'center', justifyContent:'center', borderRadius:3}}> 
              <Icon name="chat" />
              <Text style={{ fontSize: 12, fontWeight: '500' }}>
                Chat with teacher
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLOR.mainColor,
  },
  videoContainer: {
    height: 310,
  },
  chatContainer: {
    height: 200,
    paddingHorizontal: 20,
  },
});
