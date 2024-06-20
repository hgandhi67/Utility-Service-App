import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomTabBar } from './CustomTabBar';
import { DashboardScreen, SeasonScreen } from '../../screens';




const Tab = createBottomTabNavigator();




export const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={(props)=><CustomTabBar {...props}/>} 
      screenOptions={{headerShown:false}}>
      <Tab.Screen name="Storm" component={DashboardScreen} />
      <Tab.Screen name="Season" component={SeasonScreen} />
    
    </Tab.Navigator>
  );
}