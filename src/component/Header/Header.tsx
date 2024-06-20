import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, Switch } from 'react-native';
import { Colors, Images } from '../../helpers';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { Styles } from './HeaderStyles';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';
import { routeInterface } from '../../helpers/interface';
import { useIsFocused } from '@react-navigation/native';
import { toggleTheme } from '../../redux/slice/themeSlice'


interface Props {
  onPress: () => void;
  type: string;
  title: string;
}

interface NavigateProps {
  route: routeInterface,
  navigate: (screenName: string) => void;
  goBack: () => void;
  toggleDrawer: () => void
}

export const MainHeader = ({ type, onPress, title }: Props) => {
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  const dispatch = useDispatch<AppDispatch>();
  console.log("current theme is =====>", isDarkTheme)
  const isFocused = useIsFocused();
  const navigation: NavigateProps = useNavigation();
  const themeColors = isDarkTheme ? Colors.dark : Colors.light;
  return (
    <View style={[Styles.headerViewStyle, { backgroundColor: themeColors.dashboardBgColor }]}>
      <View style={[Styles.LeftComponent, { justifyContent: 'flex-start', paddingLeft: wp('1%') }]}>
        {type == 'Home' && (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={Images.DrawerMenu} resizeMode='contain' style={Styles.DrawerImgStyle} tintColor={themeColors.black} />
          </TouchableOpacity>)}
        {type == 'back' && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.BackImg} resizeMode='contain' style={Styles.BackIconImgStyle} tintColor={themeColors.black} />
          </TouchableOpacity>)}
      </View>
      <View style={[Styles.MiddleComponent, { flex: type == 'Home' ? 6.5 : 7.5 }]}>
        <View style={Styles.RoleView}>
          <Text style={[Styles.RoleText, { color: themeColors.headerTitle }]}>{title}</Text>
        </View>
      </View>
      <View style={[Styles.RightComponent, { flex: type == 'Home' ? 2 : 1.5, justifyContent: type == 'Home' ? 'space-between' : 'flex-end' }]}>
        {type == 'Home' && (
          <TouchableOpacity onPress={() => { navigation.navigate('MapScreen') }}>
            <Image source={Images.LocationImg} resizeMode='contain' style={Styles.DrawerImgStyle} tintColor={themeColors.headerTitle} />
          </TouchableOpacity>
        )}
        <Switch
          value={isDarkTheme}
          onValueChange={() => { dispatch(toggleTheme()) }} />
      </View>

    </View>
  );
};
