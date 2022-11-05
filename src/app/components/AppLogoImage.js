import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const AppLogoImage = (props) => {
    const styles = StyleSheet.create({
        topView: {
            width: '100%',
            height: props.size,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
          },
    })
  return (


    // <View style={{height:props.size}}>
    <View style={styles.topView}>
    <Image
      style={{width: 190, height: 45, }}
      source={require('../../../assets/logo.png')}
    />
    <Image
      style={{width: 250, height: 250}}
      source={require('../../../assets/logo2.png')}
    />
  {/* </View> */}
  </View>
 
  )
}

export default AppLogoImage


