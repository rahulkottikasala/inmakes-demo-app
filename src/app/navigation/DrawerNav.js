
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import HomePage from '../pages/tabBar/HomePage';
import TabNav from './TabNav';
const Drawer = createDrawerNavigator();

const DrawerNav =()=> {
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="TabNav" component={TabNav} options={{headerShown:false}}/>
      </Drawer.Navigator>
    );
  }
  export default  DrawerNav