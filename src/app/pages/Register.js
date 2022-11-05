import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {COLOR} from '../constant/Color';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      mobileNumber: null,
    };
  }

  handleMobile(value) {
    this.setState({
      mobileNumber: value,
    });
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <View style={styles.topView}>
          <Image
            style={{width: 280, height: 70}}
            source={require('../../../assets/logo.png')}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.subTitle}>We will send you a OTP to verify.</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.countryCode} value={'+91'} />
            <TextInput
              style={styles.mobileNumber}
              maxLength={10}
              keyboardType={'numeric'}
              placeholder={'Mobile number'}
              placeholderTextColor={COLOR.borderColor}
              onChangeText={value => this.handleMobile(value)}
            />
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate('Otp', {
                mobileNumber: this.state.mobileNumber,
              })
            }>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableHighlight>
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
  topView: {
    width: '100%',
    height: '63%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
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
  contentView: {
    width: '100%',
    height: '22%',
    backgroundColor: COLOR.mainColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 52,
  },
  countryCode: {
    backgroundColor: COLOR.textFieldColor,
    width: '15%',
    marginRight: 5,
    fontSize: 16,
    paddingLeft: 15,
    color: 'white',
    borderRadius: 5,
  },
  mobileNumber: {
    backgroundColor: COLOR.textFieldColor,
    width: '83%',
    fontSize: 16,
    paddingLeft: 15,
    color: 'white',
    borderRadius: 5,
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
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
