import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import StackNav from './src/app/navigation/StackNav';





const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
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
