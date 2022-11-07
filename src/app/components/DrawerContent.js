import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { COLOR } from "../constant/Color";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryContainer from "./CategoryContainer";



export default class DrawerContent extends Component{
    render(){
        return<ScrollView style={styles.container}>
            {/* Profile Header */}
            <View style={styles.profileContainer}>
                <View style={styles.popDrawerButton}>
                <TouchableHighlight
              style={styles.popDrawerButtonOutline}
              onPress={() => this.props.navigation.closeDrawer()}
              underlayColor={COLOR.buttonColor}>
              <Icon name="close" size={16} color={COLOR.buttonColor} />
            </TouchableHighlight>
                </View>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Profile')} underlayColor={COLOR.mainColor}> 
                    <View style={styles.profileNavButtonContainer}>
                    <View style={styles.profileIconContainer}>
                        <Image style={{width:50, height:50}} source={require('../../../assets/Aaron.jpg')} />
                    </View>
                    <View>
                        <Text style={{fontSize:15, color:'white'}}>Aaron Taylor</Text>
                        <Text style={{fontSize:11, color:COLOR.lightGrey}}>ID:1234</Text>
                    </View>
                    <View style={styles.profileArrowContainer}>
                    <Icon name="chevron-right" size={16} color={COLOR.buttonColor} />
                    </View>
                    </View>
                </TouchableHighlight>
            </View>
            {/* END */}
            {/* Category Container */}

            <View style={styles.categoryContainer}>
                <CategoryContainer text={'Exam Corner'}/>
                <CategoryContainer text={'Analytics'}/>
                <CategoryContainer text={'Downloads'}/>
                <CategoryContainer text={'Notifications'}/>
                <CategoryContainer text={'Referrals'}/>
                <CategoryContainer text={'Share App'}/>
                <CategoryContainer text={'Logout'} color={'red'}/>
            </View>
             {/* END */}
            {/* Enquire Button Container */}
            <View style={styles.enquireButtonContainer}>
                <TouchableHighlight style={styles.enquireButtonOutline}>
                    <Text style={{color:COLOR.buttonColor, }}> Enquire Now</Text>
                </TouchableHighlight>
            </View>
             {/* END */}

            
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.mainColor
    },
    profileContainer:{
        height:200,
    },
    popDrawerButton:{
        height:'50%',
        justifyContent: 'center',
    },
    popDrawerButtonOutline:{
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 3,
        borderColor:COLOR.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 10,
    },
    profileNavButtonContainer:{
        height:'50%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:30,
        paddingRight:40
    },
    profileIconContainer:{
        height:50,
        width:50,
        borderRadius:50,
        borderWidth:2,
        borderColor:COLOR.buttonColor,
        overflow:'hidden',
    },
    categoryContainer:{
        paddingLeft:33,
        paddingRight:30,
        marginTop:-15,
        justifyContent:'center'
    },
    enquireButtonContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    },
    enquireButtonOutline:{
        alignItems:'center',
        justifyContent:'center',
        borderColor:COLOR.buttonColor,
        borderWidth:1,
        width:'80%',
        height:50,
        borderRadius:5
    }
    
    
})