import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import GreenButton from '../../components/GreenButton';
import SpaceContainer from '../../components/SpaceContainer';
import { COLOR } from '../../constant/Color';

export default class Profile extends Component {
  titleText = (props) => {
    return (
      <View
        style={{
          height: 60,
          borderBottomColor: COLOR.lightGrey,
          justifyContent: 'center',
          borderWidth: .2,
          borderColor: COLOR.transparantColor,
          paddingLeft:20
        }}>
        <Text style={{ fontSize: 15, color: 'black', fontWeight:'700' }}>{props.title}</Text>
      </View>
    );
  };

  detailsText = (props) => {
    return(
      <View
        style={{
          height: 60,
          borderBottomColor: COLOR.lightGrey,
          alignItems:'center',
          borderWidth: .2,
          borderColor: COLOR.transparantColor,
          flexDirection:'row',
          marginLeft:20,
          marginRight:20
        }}>
        <Text style={{ fontSize: 15, color: 'grey' , width:'50%'}}>{props.label}</Text>
        <Text style={{ fontSize: 15, color: 'black', fontWeight:'500' }}>{props.value}</Text>
      </View>
    )
    
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: COLOR.mainColor }} />
        <View style={{ flex: 3, backgroundColor: 'white' }} />
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>
                Profile
              </Text>
            </View>
            <Icon
              style={styles.notificationIcon}
              name="notifications"
              size={22}
              color={'white'}
            />
            <TouchableHighlight
              style={styles.headerMenuButton}
              onPress={() => this.props.navigation.openDrawer()}
              underlayColor="#DDDDDD">
              <Icon name="grid-view" size={16} color={COLOR.buttonColor} />
            </TouchableHighlight>
          </View>
          <View style={styles.userDetailsContainer}>
            <View
              style={{
                height: 80,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View style={styles.profileIconContainer}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../../assets/Aaron.jpg')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: 'black' }}>
                  Aaron Taylor
                </Text>
                <Text style={{ fontSize: 11, color: 'grey' }}>
                  ID:1234
                </Text>
              </View>
            </View>
            <this.titleText title={'Personal Info'}/>
            <this.detailsText label={'Account Settings'} value={'Aaron Taylor'}/>
            <this.detailsText label={'Email'} value={'emailidid@server.com'}/>
            <this.detailsText label={'Number'} value={'+91 9876543210'}/>
            <this.titleText title={'Course Info'}/>
            <this.detailsText label={'Center'} value={'Inmakes edu'}/>
            <this.detailsText label={'Course'} value={'Plus Two Science'}/>
            <this.detailsText label={'Payment Status'} value={'Free'}/>
            <this.detailsText label={'Expiry Date'} value={'Not Applicable'}/>
          </View>


          <GreenButton text={'Custom Payment'} icon={'credit-card'} />
          <GreenButton text={'Referrals'} icon={'forward'} />
          <SpaceContainer height={150} />
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  notificationIcon: {
    position: 'absolute',
    right: 70,
  },
  headerMenuButton: {
    position: 'absolute',
    right: 10,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLOR.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  userDetailsContainer: {
    height: 620,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 7,
    borderColor: COLOR.lightGrey,
    borderWidth: 0.2,
  },
  greenButton: {
    backgroundColor: COLOR.buttonColor,
    borderRadius: 7,
    marginTop: 10,
    marginHorizontal: 20,
    height: 60,
  },
  profileIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLOR.buttonColor,
    overflow: 'hidden',
    marginLeft: 18,
  },
});
