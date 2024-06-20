import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabs } from '../BottomTab/BottomTab';
import { CustomDrawerContent } from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export const  CustomDrawer=()=> {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="DrawerNav" component={BottomTabs} />
    </Drawer.Navigator>
  );
}