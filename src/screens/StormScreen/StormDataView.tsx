import { View, Text, TouchableOpacity , Image} from 'react-native'
import { Styles } from './StormScreenStyles'
import { Images , Colors} from '../../helpers'
import React from 'react'

export const StormDataView = ({item, navigation, from}) => {
  console.log("from value------->", from)
  return (
    <TouchableOpacity onPress={()=>{ from == 'Storm' ? navigation.navigate('EventScreen', item) : navigation.navigate('EventDetailScreen', item)}}>
    <View style={Styles.FlatListItemView}>
                <View>
                    {from == 'Storm' ? 
             <Text style={Styles.ManagerNameStyle}>{item.date}</Text>
             : <View style={Styles.EventDataView}>
                <Text style={Styles.ManagerNameStyle}>{item.date}</Text>
                <Text style={[Styles.ManagerNameStyle, Styles.padding]}>{item.time}</Text>
                </View> }
             <Text style={[Styles.ManagerNameStyle,{color:Colors.greyColor}]}>{from == 'Storm' ? item.name : item.visit}</Text>
             </View>
             <View>
             <Image source={Images.RightArrowImg} resizeMode='contain' style={Styles.ImageStyle}  /> 
             </View>
             </View>
     
  </TouchableOpacity>
  )
}

