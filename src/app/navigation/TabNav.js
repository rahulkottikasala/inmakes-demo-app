import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR } from '../constant/Color';
import Contact from '../pages/tabBar/Contanct';
import Exams from '../pages/tabBar/Exams';
import HomePage from '../pages/tabBar/HomePage';
import Profile from '../pages/tabBar/Profile';
import Recents from '../pages/tabBar/Recents';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 10,
          borderColor: COLOR.lightGrey,
          borderWidth: 0.5,
          height: 50,
          paddingTop:10
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{

          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{width:50,}}>

                <Icon name="home" size={30} color={COLOR.buttonColor} />
              </View>
            ) : (
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Icon name="home" size={20} color={'grey'} />
              <Text style={{color:'grey', fontSize:10, marginRight:5}}>Home</Text>
            </View>
            ),
        }}
      />
      <Tab.Screen
        name="Recents"
        component={Recents}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="play-arrow" size={32} color={COLOR.buttonColor} />
            ) : (
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Icon name="play-arrow" size={20} color={'grey'} />
              <Text style={{color:'grey',  fontSize:10,}}>Recents</Text>
            </View>
            ),
        }}
      />
      <Tab.Screen
        name="Exam"
        component={Exams}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="assignment" size={27} color={COLOR.buttonColor} />
            ) : (
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Icon name="assignment" size={20} color={'grey'} />
              <Text style={{color:'grey', fontSize:10, marginRight:5}}>Exam</Text>
            </View>
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="person" size={30} color={COLOR.buttonColor} />
            ) : (
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Icon name="person" size={20} color={'grey'} />
              <Text style={{color:'grey', fontSize:10, marginRight:5}}>Profile</Text>
            </View>
            ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="mail" size={27} color={COLOR.buttonColor} />
            ) : (
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Icon name="mail" size={20} color={'grey'} />
              <Text style={{color:'grey', fontSize:10, marginRight:5}}>Contact</Text>
            </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
