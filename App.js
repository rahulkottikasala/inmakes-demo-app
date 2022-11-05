import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import Register from './src/app/pages/Register';
import Otp from './src/app/pages/Otp';

const Stack = createStackNavigator();

const MyStack = () => {
  return(<Stack.Navigator>
    <Stack.Screen name='Register' component={Register}  options={{headerShown:false}}/>
    <Stack.Screen name='Otp' component={Otp} options={{headerShown:false}}/>
  </Stack.Navigator>)
} 

const App = () => {
  return (
   <NavigationContainer>
    <MyStack/>
   </NavigationContainer>
     
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
