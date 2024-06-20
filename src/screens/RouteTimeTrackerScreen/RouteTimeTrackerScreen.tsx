import { View, Text, SafeAreaView, TouchableOpacity, Image, ListRenderItemInfo, FlatList } from 'react-native'
import React from 'react'
import { MainHeader } from '../../component'
import { Images, Colors } from '../../helpers'
import { Styles } from './RouteTimeTrackerStyles'
import { NavigationProps } from '../../helpers/interface'
import { RouteData } from '../../Json'
import {  useSelector } from 'react-redux';
import  { RootState} from '../../redux/store';


type Item = {
  id: number;
  name: string;
  startTime: string;
  EndTime : string; 
};

export const RouteTimeTrackerScreen = (props : NavigationProps) => {

  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  const themeColors = isDarkTheme ? Colors.dark : Colors.light;

  const renderItems = ({ item }: ListRenderItemInfo<Item>) => {
  //console.log("item is ----->", item)
    return (
      <TouchableOpacity onPress={()=>{}}>
        <View style={[Styles.FlatListItemView, {backgroundColor:themeColors.containerBgColor}]}>
          <View style={{ }}>
         <Text style={[Styles.ManagerNameStyle, {color:themeColors.black}]}>{item.name}</Text>
         <View style={Styles.flatlistDataView} >
          <View>
          <Image source={Images.RouteImg} resizeMode='contain' style={Styles.RouteImageStyle} tintColor={themeColors.headerTitle} />
          </View>
          <View>
          <View style={Styles.TimeView}>
            <Text style={[Styles.TimeFieldText, {color:themeColors.black}]}>start Time</Text>
            <Text style={[Styles.TimeValueText, {color:themeColors.headerTitle}]}>{item.startTime}</Text>
          </View>
          <View style={Styles.TimeView}>
            <Text style={[Styles.TimeFieldText, {color:themeColors.black}]}>End Time</Text>
            <Text style={[Styles.TimeValueText, {color:themeColors.headerTitle}]}>{item.startTime}</Text>
          </View>
          </View>
          </View>
         </View>
         <View>
          <Image source={Images.DriverImg} resizeMode='contain' style={Styles.DriverImageStyle} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={[Styles.Main, {backgroundColor:themeColors.dashboardBgColor}]}>
        <MainHeader title='Route Time Tracker' onPress={() => { }} type="back" />
        <View style={Styles.Container}>
          <TouchableOpacity onPress={()=>{props.navigation.navigate('SelectAreaManager', {})}}>
            <View style={[Styles.SelectManagerView, {backgroundColor:themeColors.containerBgColor, borderColor: isDarkTheme ? 'transparent' : Colors.primaryColor}]}>
              <View style={Styles.ManagerView}>
                <Text style={[Styles.ManagerTextStyle, {color:themeColors.headerTitle}]}>Select Area Manager</Text>
                <Text style={[Styles.ManagerNameStyle, {color:themeColors.black}]}>Elijah</Text>
              </View>
            <View>
            <Image source={Images.RightArrowImg} resizeMode='contain' style={Styles.ImageStyle} tintColor={themeColors.black}/>
            </View>
            </View>
         
          </TouchableOpacity>
          <View style={{}}>
            <FlatList
              data={RouteData}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
              keyExtractor={(item) => item.id.toString()}

            />
          </View>
        </View>
        </SafeAreaView>
  )
}

