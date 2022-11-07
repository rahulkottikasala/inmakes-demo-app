import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { COLOR } from '../constant/Color';

export default AppTourComponent = (props)=> {
    const image = props.image;
    const title = props.title;
    const desc = props.desc;
    

  
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri:image ? image : "https://wallpaperaccess.com/full/3897424.jpg"}} />
          </View>
          <View style={styles.details}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.decs}>{desc}</Text>
          </View>
          
        </View>
      );}

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding:10,
          backgroundColor: 'white',
        },
        imageContainer: {
          width: '100%',
          height: '85%',
          borderRadius:10,
          overflow:'hidden'
        },
        image: {
          width:'100%',
          height:'100%'
        },
        details: {
          width: '100%',
          height: '15%',
          backgroundColor: 'white',
          alignItems:'center',
          justifyContent:'center'
        },
        title: {
          fontSize:21,
          color:'black',
          fontWeight:'600'
        },
        decs: {
          fontSize:12,
          color:COLOR.lightGrey,
          fontWeight:'300'
        },
       
      });