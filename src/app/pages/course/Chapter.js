import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, ScrollView } from 'react-native';
import { COLOR } from '../../constant/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChapterCount from '../../components/ChapterCount';
import ChapterTab from './ChapterTab';

export default class Chapter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLabel}>
            <Text style={styles.headerText}>Biology</Text>
          </View>
          <TouchableHighlight
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              borderWidth: 0.5,
              borderColor: COLOR.lightGrey,
              borderRadius: 3,
              position: 'absolute',
              top: 30,
              left: 30,
            }}
            onPress={() => this.props.navigation.pop()}
            >
            <Icon name="chevron-left" size={20} color={COLOR.buttonColor} />
          </TouchableHighlight>
          <View style={styles.titleContainer}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                marginRight: 30,
                marginBottom: 5,
              }}>
              Long Chapter Name Can be shown here
            </Text>
            <ChapterCount first={'12 CHapters'} second={'124 hours'} />
          </View>
        </View>
        <ChapterTab/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 220,
    backgroundColor: COLOR.mainColor,
  },
  headerLabel: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20,
    marginTop: 30,
  },
});
