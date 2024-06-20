import { View, Text, SafeAreaView, FlatList, ListRenderItemInfo, Image } from 'react-native'
import { MainHeader } from '../../component'
import { Styles } from './StormScreenStyles'
import { Images } from '../../helpers'
import React from 'react'
import { StormData } from '../../Json'
import { StormDataView } from './StormDataView'
import { NavigationProps } from '../../helpers/interface'

interface StormDataInterface  {
    id: number;
    name: string;
    date : string;
  };
export const StormScreen = (props : NavigationProps) => {

    const renderItems = ({ item }: ListRenderItemInfo<StormDataInterface>) => {
       
          return (
            <StormDataView item={item} navigation={props.navigation} from={'Storm'}/>
          )
        }
  return (
    <SafeAreaView style={Styles.Main}>
      <MainHeader title='Storms' onPress={() => { }} type="back" />
      <View style={Styles.Container}>
      <View style={{}}>
            <FlatList
              data={StormData}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
              keyExtractor={(item) => item.id.toString()}

            />
          </View>
       
      </View>
    </SafeAreaView>
  )
}

