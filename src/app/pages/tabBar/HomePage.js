import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {COLOR} from '../../constant/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RoundIcon from '../../components/RoundIcon';
import DropDown from '../../components/Dropdown';
import SpaceContainer from '../../components/SpaceContainer';

export default class HomePage extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white'}} >
        {/* -------------------Header--------------------- */}
        <View style={styles.header}>
          <View style={styles.headerLeftContainer}>
            <TouchableHighlight
              style={styles.drawerButtonOutline}
              onPress={() => this.props.navigation.openDrawer()}
              underlayColor="#DDDDDD">
              <Icon name="grid-view" size={16} color={COLOR.buttonColor} />
            </TouchableHighlight>
            <Image
              source={require('../../../../assets/logo.png')}
              style={{width: 140, height: 35}}
            />
            <View></View>
          </View>
          <View style={styles.headerRightContainer}>
            <TouchableHighlight style={styles.headerMyclassOutline}>
              <View style={{flexDirection: 'row'}}>
                <RoundIcon size={18} color={'#005c29'} />
                <Text
                  style={{
                    marginLeft: 6,
                    color: COLOR.buttonColor,
                    fontSize: 12,
                  }}>
                  Classes
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {/* ------END----- */}

        {/* -------------------WelcomePage--------------------- */}

        <View style={styles.welcomPage}>
          <View style={styles.welcomePageTextContainer}>
            <Text style={{color: 'black', fontSize: 12}}>Good morning</Text>
            <Text style={{fontSize: 22, fontWeight: '600', color: 'black'}}>
              Aaron Taylor
            </Text>
          </View>
        </View>
        {/* ------END----- */}

        {/* -------------------DrawerContainer--------------------- */}

        <View style={styles.DrawerContainer}>
          <ImageBackground
            source={require('../../../../assets/drawerBg.jpg')}
            style={styles.DrawerContainerStyle} imageStyle={{ borderRadius: 5}}>
            <Text
              style={{marginLeft: 10, color: COLOR.textColor, marginTop: 10}}>
              Class
            </Text>
            <DropDown />
          </ImageBackground>
        </View>
        {/* ------END----- */}

        {/* -------------------SubjectContainer--------------------- */}
        <ScrollView
          style={styles.subjectContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableHighlight style={styles.subjectButton}>
              <View style={styles.subjectButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.subjectButton}>
              <View style={styles.subjectButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.subjectButton}>
              <View style={styles.subjectButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.subjectButton}>
              <View style={styles.subjectButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.subjectButton}>
              <View style={styles.subjectButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.subjectButton}>
              <View style={styles.subjectButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.subjectButton}>
              <View style={styles.subjectButtonItemsContainer}></View>
            </TouchableHighlight>
            {/* For Space */}
            <SpaceContainer />
          </View>
        </ScrollView>

        {/* ------END----- */}
        {/* -------------------Recent courses--------------------- */}
        <View style={styles.recentCourseTextContainer}>
          <Text style={{color: 'black', fontSize: 12}}>Recent courses</Text>
        </View>
        <ScrollView
          style={styles.recentCourseContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableHighlight style={styles.recentCourseButton}>
              <View style={styles.recentButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.recentCourseButton}>
              <View style={styles.recentButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.recentCourseButton}>
              <View style={styles.recentButtonItemsContainer}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.recentCourseButton}>
              <View style={styles.recentButtonItemsContainer}></View>
            </TouchableHighlight>
            <SpaceContainer />
          </View>
        </ScrollView>
        {/* ------END----- */}
        {/* -------------------serveces--------------------- */}

        <ScrollView
          style={styles.servecsContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.serviceCard}>
              <View style={styles.serveceButtonItemsContainer}></View>
            </View>
            <View style={styles.serviceCard}>
              <View style={styles.serveceButtonItemsContainer}></View>
            </View>
            <View style={styles.serviceCard}>
              <View style={styles.serveceButtonItemsContainer}></View>
            </View>
            <View style={styles.serviceCard}>
              <View style={styles.serveceButtonItemsContainer}></View>
            </View>
            <View style={styles.serviceCard}>
              <View style={styles.serveceButtonItemsContainer}></View>
            </View>
            <SpaceContainer />
          </View>
        </ScrollView>
        <View  style={{height:100}}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    borderBottomColor: COLOR.lightGrey,
    borderWidth: 0.2,
    flexDirection: 'row',
  },
  headerLeftContainer: {
    width: '65%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  drawerButtonOutline: {
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
  headerRightContainer: {
    width: '35%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerMyclassOutline: {
    borderColor: COLOR.buttonColor,
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 32,
  },
  welcomPage: {
    width: '100%',
    height: 100,
    marginTop: 10,
  },
  welcomePageTextContainer: {
    height: '100%',
    padding: 22,
  },
  DrawerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  DrawerContainerStyle: {
    // backgroundColor: COLOR.mainColor,
    padding: 10,
    borderRadius: 4,
    // overflow:'hidden'
  },
  subjectContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 20,
    maxHeight: 80,
    marginTop:15,
    marginBottom:10
  },
  subjectButton: {
    width: 90,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 0.7,
  },
  recentCourseTextContainer: {
    marginLeft: 20,
    width: '100%',
    marginBottom: 5,
  },
  recentCourseContainer: {
    paddingLeft: 20,
    maxHeight: 120,
  },
  recentCourseButton: {
    width: 200,
    height: 120,
    backgroundColor: COLOR.mainColor,
    marginRight: 10,
    borderRadius: 2,
  },
  servecsContainer:{
    paddingLeft: 20,
    maxHeight: 390,
    padding:20
  },
  serviceCard:{
    width: 240,
    height: 350,
    backgroundColor: COLOR.mainColor,
    marginRight: 15,
    borderRadius: 7,
  }
});
