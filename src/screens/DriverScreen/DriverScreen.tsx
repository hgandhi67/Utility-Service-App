import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Styles } from './DriverScreenStyles'
import { MainHeader } from '../../component'
import { DriverTabComponent } from './DriverTabComponent'
import { Colors } from '../../helpers'
import { BestDriverData, WeekestDriverData } from '../../Json'
import {  useSelector } from 'react-redux';
import  { RootState} from '../../redux/store';

export const DriverScreen = () => {

  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  const themeColors = isDarkTheme ? Colors.dark : Colors.light;
  return (
    <SafeAreaView style={[Styles.Main]}>
    <MainHeader title='Drivers' onPress={() => { }} type="back" />
    <View style={Styles.Container}>
      <View style={Styles.DriverView}>
      <View style={Styles.CustomerCountView}>
                    <Text style={[Styles.ManagerNameStyle, {color:themeColors.black}]}>Total Drivers</Text>
                    <Text style={[Styles.CustomerCountText, {color:themeColors.headerTitle}]}>5</Text>
                </View>
                <View style={Styles.CustomerCountView}>
                    <Text style={Styles.ManagerNameStyle}>Best Drivers</Text>
                    <Text style={Styles.CustomerCountText}>3</Text>
                </View>
                <View style={Styles.CustomerCountView}>
                    <Text style={Styles.ManagerNameStyle}>Weakest Drivers</Text>
                    <Text style={Styles.CustomerCountText}>2</Text>
                </View>
      </View>
      <DriverTabComponent BestDriver={BestDriverData} WeekestDriver={WeekestDriverData}/>
        </View>
        </SafeAreaView>
  )
}

 