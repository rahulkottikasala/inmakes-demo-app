import React, {Component} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import AppLogoImage from '../components/AppLogoImage';
import {COLOR} from '../constant/Color';

export default class StudentDetails extends Component {
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
        <AppLogoImage size={'40%'} logo2={250} logoH={45} logoW={160} />
        <View style={styles.titleView}>
          <Text style={styles.title}>Student Details</Text>
        </View>
        <ScrollView style={styles.contentView}>
          <View style={styles.scrollView}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textFeild}
                maxLength={10}
                keyboardType={'numeric'}
                placeholder={'Mobile number'}
                placeholderTextColor={COLOR.borderColor}
                onChangeText={value => this.handleMobile(value)}
              />
              <TextInput
                style={styles.textFeild}
                maxLength={10}
                keyboardType={'email-address'}
                placeholder={'Email'}
                placeholderTextColor={COLOR.borderColor}
                onChangeText={value => this.handleMobile(value)}
              />

              <SelectDropdown
                data={['Kerala', 'Karnataka', 'Tamilnadu', 'Goa', 'Hariyana', 'Uttar Pradhesh', 'Maharashtra', 'Bihar', 'Punjab', 'Odisha', 'Gujarat', 'Rajastan', 'West Bengal']}
                onSelect={(selectedItem, index) => console.log(selectedItem)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}

                buttonStyle={{backgroundColor:COLOR.textFieldColor, width:'100%', marginBottom:10, borderRadius:5,flexDirection:'column', alignItems:'flex-start',paddingTop:12}}
                buttonTextStyle={{ color:COLOR.borderColor, fontSize:16}}
                defaultButtonText='Select state(Select)' 
                dropdownStyle={{backgroundColor:COLOR.buttonColor,borderRadius:10,}}
              />
              <TextInput
                style={styles.textFeild}
                maxLength={6}
                keyboardType={'numeric'}
                placeholder={'Pincode'}
                placeholderTextColor={COLOR.borderColor}
                onChangeText={value => this.handleMobile(value)}
              />
            </View>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('SchoolBoard')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
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
    height: '10%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    color: 'black',
  },
  scrollView: {
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView: {
    width: '100%',
    height: '50%',
    backgroundColor: COLOR.mainColor,

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  inputContainer: {
    width: '93%',
    marginBottom: 5,
  },

  textFeild: {
    backgroundColor: COLOR.textFieldColor,
    fontSize: 16,
    paddingLeft: 15,
    color: 'white',
    borderRadius: 5,
    marginBottom: 10,
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
