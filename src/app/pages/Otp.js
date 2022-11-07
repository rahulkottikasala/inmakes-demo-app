import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppLogoImage from '../components/AppLogoImage';
import {COLOR} from '../constant/Color';

export default class Otp extends Component {
  constructor(){
    super()
    this.state={
      countDown: true,
      count:1,
    }
  }
  render() {
    mobileNumber = this.props.route.params.mobileNumber
      ? this.props.route.params.mobileNumber
      : '0000000000';
      
    return (
      <View style={StyleSheet.container}>
        <AppLogoImage size={'53%'} />
        <View style={styles.titleView}>
          <Text style={styles.title}>Verification code</Text>
          <Text style={styles.subTitle}>
            Please type the verification code send to
          </Text>
          <Text style={styles.verifiedNumber}>+91 {mobileNumber} </Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.inputContainer}>
            <OTPInputView
              pinCount={6} 
              codeInputFieldStyle={{
                backgroundColor: COLOR.textFieldColor,
                borderRadius: 5,
                borderColor: COLOR.borderColor,
                justifyContent:'center',
                fontSize:22,
                fontWeight:'bold',
                color:COLOR.buttonColor,
              }}
              keyboardType={'phone-pad'}
              onCodeFilled={() => this.props.navigation.navigate('StudentDetails')}

            //   onCodeFilled = {(code => {
            //     console.log(`Code is ${code}, you are good to go!`)
            // })}

            />
          </View>
          <TouchableHighlight style={this.state.countDown ? styles.disabledButton : styles.button} onPress={() => this.setState({
            count:1,
            countDown:true
          })}>
            <Text style={styles.buttonText}>Resend OTP</Text>
          </TouchableHighlight>
          <View  style={styles.otpResendTimeContainer}>
          <Text style={styles.otpResendTime}>Resend after</Text>
          <CountDown
        until={60 * this.state.count}
        size={11}
        onFinish={() => this.setState({
          countDown:false
        })}
        digitStyle={{backgroundColor: COLOR.mainColor}}
        digitTxtStyle={{color: COLOR.borderColor}}
        timeToShow={['S']}
        timeLabels={{ s: ''}}
      />
      <Text style={styles.otpResendTime}>sec</Text>
      </View>
          <View style={styles.contactUsContainer}>
            <Icon name="call" size={17} color={COLOR.buttonColor} />
            <TouchableHighlight style={styles.contactUs}>
              <Text style={styles.contactUsText}>Contact Us</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleView: {
    width: '100%',
    height: '15%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
  },
  verifiedNumber: {
    marginTop: 15,
    marginBottom: 15,
    fontWeight: '500',
    color: 'black',
  },
  contentView: {
    width: '100%',
    height: '33%',
    backgroundColor: COLOR.mainColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    // paddingHorizontal: 10,
    marginLeft: -16,
    height: 52,
    width: '88%',
  },
  button: {
    width: '93%',
    marginTop: 15,
    height: 52,
    backgroundColor: COLOR.buttonColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    width: '93%',
    marginTop: 15,
    height: 52,
    backgroundColor: COLOR.textFieldColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  otpResendTimeContainer:{
    flexDirection:'row'
  },
  otpResendTime: {
    fontSize: 12,
    marginTop: 5,
    color: COLOR.borderColor,
  },
  contactUsContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactUs: {},
  contactUsText: {
    color: COLOR.buttonColor,
    fontWeight: '500',
    marginLeft: 5,
    fontSize: 16,
  },
});
