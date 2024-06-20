import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splashscreen , LoginScreen, RouteTimeTrackerScreen, SelectAreaManagerScreen, DriverScreen, CustomerScreen, MapScreen, CasesScreen, InvoiceScreen, StormScreen, EventScreen, EventDetailScreen, CasesDetailScreen} from '../screens';
import {CustomDrawer} from '../component/CustomDrawer/CustomDrawer';




const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer> 
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splashscreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="Drawer" component={CustomDrawer} />
             <Stack.Screen name="RouteTimeTracker" component={RouteTimeTrackerScreen}/> 
             <Stack.Screen name="SelectAreaManager" component={SelectAreaManagerScreen}/> 
             <Stack.Screen name="DriverScreen" component={DriverScreen}/> 
             <Stack.Screen name="CustomerScreen" component={CustomerScreen}/> 
             <Stack.Screen name="MapScreen" component={MapScreen}/>
             <Stack.Screen name="CasesScreen" component={CasesScreen}/>
             <Stack.Screen name="InvoiceScreen" component={InvoiceScreen}/>
             <Stack.Screen name="StormScreen" component={StormScreen}/>
             <Stack.Screen name="EventScreen" component={EventScreen}/>
             <Stack.Screen name="EventDetailScreen" component={EventDetailScreen}/>
             <Stack.Screen name="CasesDetailScreen" component={CasesDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Router;