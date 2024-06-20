import { Styles } from './CustomDrawerStyles';
import {Image, TouchableOpacity, FlatList, View, Text, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { Colors, Images } from '../../helpers';

import { DrawerItem } from '../../helpers/interface';

export const CustomDrawerContent = ({navigation}:any) => {
    const DrawerItem = [
      {
        id:1,
        title: 'DashBoard',
        icon: Images.HomeIcon,
        toNavigate: 'DrawerNav' 
      },
      {
        id:2,
        title: 'Home',
        icon: Images.HomeIcon,
        toNavigate: 'DrawerNav'
        
      },
    ]
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>();
  
  
    const renderItems=(item: DrawerItem, index: number)=>{
      const isSelected = index === selectedItemIndex;
      return(
        <TouchableOpacity key={index} style={[Styles.dataItemStyle, isSelected && Styles.selectedItem ]} onPress={()=>{navigation.navigate(item.toNavigate) ,setSelectedItemIndex(index) }}>
            <Image source={item.icon} resizeMode='contain' style={Styles.DrawerIconStyle} tintColor={isSelected ? Colors.primaryColor : Colors.white  }/>
            <Text style={[Styles.InputTextStyle, isSelected && Styles.selectedTextStyle]}>{item.title}</Text>
        </TouchableOpacity>
      )
    }
  
    return (
      <SafeAreaView style={Styles.MainStyle}>
          <View style={Styles.HeaderLogoView}>
              <Image source={Images.Logo}  resizeMode='cover' style={Styles.HeaderLogoStyle} tintColor={Colors.white}/>
            </View>
              <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={Styles.FlatListStyle}
                    data={DrawerItem}
                    scrollEnabled={true}
                    renderItem={({ item , index }) => renderItems(item, index)}
                    keyExtractor={(item: any) => item.id}
                   
                  />
      </SafeAreaView>
     
    );
  };

