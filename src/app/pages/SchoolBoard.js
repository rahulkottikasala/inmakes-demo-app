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

export default class SchoolBoard extends Component {
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
        <AppLogoImage size={'55%'} />
        <View style={styles.titleView}>
          <Text style={styles.title}>Select your school board</Text>
        </View>
        <ScrollView style={styles.contentView}>
          <View style={styles.scrollView}>
            <View style={styles.inputContainer}>
              <SelectDropdown
                data={['CBSE', 'STATE']}
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
                buttonStyle={{
                  backgroundColor: COLOR.textFieldColor,
                  width: '100%',
                  marginBottom: 10,
                  borderRadius: 5,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingTop: 12,
                }}
                buttonTextStyle={{color: COLOR.borderColor, fontSize: 16}}
                defaultButtonText="Select state(Select)"
                dropdownStyle={{
                  backgroundColor: COLOR.buttonColor,
                  borderRadius: 10,
                }}
              />
              <SelectDropdown
                data={['8th', '9th', '10th', '+1', '+2']}
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
                buttonStyle={{
                  backgroundColor: COLOR.textFieldColor,
                  width: '100%',
                  marginBottom: 10,
                  borderRadius: 5,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingTop: 12,
                }}
                buttonTextStyle={{color: COLOR.borderColor, fontSize: 16}}
                defaultButtonText="Select state(Select)"
                dropdownStyle={{
                  backgroundColor: COLOR.buttonColor,
                  borderRadius: 10,
                }}
              />
            </View>
            <TouchableHighlight
              style={styles.button}
               onPress={() => this.props.navigation.navigate('AppTourA')}
            >
              <Text style={styles.buttonText}>Continue</Text>
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
    height: '35%',
    backgroundColor: COLOR.mainColor,

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  inputContainer: {
    width: '93%',
    marginBottom: 5,
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
