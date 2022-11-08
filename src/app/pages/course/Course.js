import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { COLOR } from '../../constant/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChapterCount from '../../components/ChapterCount';


export default class Course extends Component {
 
 
  render() {
    const  Card = (props) => {
      return(
        <TouchableHighlight style={{justifyContent:'center',padding:20, backgroundColor:'white', borderRadius:5 , marginBottom:10}} onPress={() => this.props.navigation.navigate('Chapter') } underlayColor={COLOR.lightGrey}>
          <View>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginBottom:10}}>{props.title}</Text>
        <ChapterCount first={props.first} second={props.second} color={props.color}/>
        </View>
        </TouchableHighlight>
      )
    }
   
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: COLOR.mainColor }} />
        <View style={{ flex: 3, backgroundColor: '#e6e8e6' }} />
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <TouchableHighlight style={{ alignItems: 'center', justifyContent:'center' , width:30, height:30, borderWidth:.5, borderColor:COLOR.lightGrey, borderRadius:3, marginLeft:30, marginTop:30 }} onPress={() => this.props.navigation.pop()} >
                <Icon name="chevron-left" size={20} color="white" />
            </TouchableHighlight>
            <View style={styles.titleContainer}>
              <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' , marginBottom:5}}>Biology</Text>
              <ChapterCount first={'12 CHapters'} second={'124 hours'} />
            </View>
          </View>
            <ScrollView style={{marginHorizontal:20, borderRadius:5}}>
              
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              <Card title={'Long Chapter Name Can be shown here'} first={'Chapter 1'} second={'3parts'} color={'grey'} />
              
            </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      header: {
        justifyContent: 'center',
        height: 180,
      },
      titleContainer:{
        height: 100,
        justifyContent  : 'center',
        paddingLeft:20

      }
});
