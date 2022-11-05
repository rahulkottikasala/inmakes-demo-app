import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const AppLogoImage = (props) => {
  var logoH = props.logoH ? props.logoH : 45
  var logoW = props.logoW ? props.logoW : 190
  var logo2 = props.logo2 ? props.logo2 : 250
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
      style={{width: logoW, height: logoH, }}
      source={require('../../../assets/logo.png')}
    />
    <Image
      style={{width:logo2, height: logo2,}}
      source={require('../../../assets/logo2.png')}
    />
  {/* </View> */}
  </View>
 
  )
}

export default AppLogoImage


