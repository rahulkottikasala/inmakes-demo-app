import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR } from '../constant/Color';
import Contact from '../pages/tabBar/Contanct';
import Exams from '../pages/tabBar/Exams';
import Profile from '../pages/tabBar/Profile';
import Recents from '../pages/tabBar/Recents';
import DrawerNav from './DrawerNav';
const Tab = createBottomTabNavigator();


const TabNav =() => {
    return (
      <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle:{
            position:'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'white',
            borderRadius:10,
            borderColor:COLOR.lightGrey,
            borderWidth:.5,
            height:70,

        }
      })}
      >
        <Tab.Screen name="Home" component={DrawerNav}  options={{headerShown:false}}/>
        <Tab.Screen name="Recents" component={Recents}  options={{headerShown:false}}/>
        <Tab.Screen name="Exam" component={Exams}  options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
        <Tab.Screen name="Contact" component={Contact}  options={{headerShown:false}}/>
      </Tab.Navigator>
    );
  }

  export default TabNav