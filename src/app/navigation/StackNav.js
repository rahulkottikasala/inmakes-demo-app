import {createStackNavigator} from '@react-navigation/stack';
import AppTourA from '../pages/appTour/AppTourA';
import AppTourB from '../pages/appTour/AppTourB';
import AppTourC from '../pages/appTour/AppTourC';
import AppTourD from '../pages/appTour/AppTourD';
import Otp from '../pages/Otp';
import Register from '../pages/Register';
import SchoolBoard from '../pages/SchoolBoard';
import StudentDetails from '../pages/StudentDetails';
import TabNav from './TabNav';


const Stack = createStackNavigator();

const StackNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
        <Stack.Screen
          name="StudentDetails"
          component={StudentDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SchoolBoard"
          component={SchoolBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppTourA"
          component={AppTourA}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppTourB"
          component={AppTourB}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppTourC"
          component={AppTourC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppTourD"
          component={AppTourD}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="MyTabs"
          component={TabNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };


  export default StackNav