import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR } from '../constant/Color';

const RoundIcon = (props) => {
    const styles = StyleSheet.create({
        Iocn:{
            borderRadius:10,
            backgroundColor:props.color ? props.color : COLOR.buttonColor,
            height:props.size,
            width:props.size,
          }
    })
  return <View style={styles.Iocn} />;
};

export default RoundIcon;
