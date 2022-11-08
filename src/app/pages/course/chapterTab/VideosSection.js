import React, { Component } from 'react';
import {
  TouchableHighlight,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {} from 'react-native-gesture-handler';

import ChapterCount from '../../../components/ChapterCount';

export default class VideosSection extends Component {
  Card = () => {
    return (
      <TouchableHighlight
        style={{
          height: 240,
          backgroundColor: 'white',
          marginBottom: 10,
          borderRadius: 3,
          overflow: 'hidden',
          borderWidth: 0.3,
          borderColor: '#d9d9d9',
        }}
        onPress={() => this.props.navigation.navigate('Video')}
        >
        <View>
          <ImageBackground
            source={{
              uri: 'https://www.aakash.ac.in/blog/wp-content/uploads/2018/04/20April18.jpg',
            }}
            style={{ height: 150, backgroundColor: 'green' }}></ImageBackground>
          <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 15 }}>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>
              Long Chapter Name Can be shown here
            </Text>
            <ChapterCount
              first={'12 CHapters'}
              second={'124 hours'}
              color={'grey'}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <ScrollView
        style={{
          paddingHorizontal: 30,
          paddingTop: 20,
        }}>
        <this.Card />
        <this.Card />
        <this.Card />
        <this.Card />
        <this.Card />
      </ScrollView>
    );
  }
}
