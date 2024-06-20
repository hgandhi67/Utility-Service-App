import { View, Text, SafeAreaView, ListRenderItemInfo, FlatList} from 'react-native'
import { MainHeader } from '../../component'
import { Styles } from './EventScreenStyles'
import React from 'react'
import { NavigationProps, EventDataInterface } from '../../helpers/interface'
import { StormDataView } from '../StormScreen/StormDataView'
import { EventsData } from '../../Json'

export const EventScreen = (props: NavigationProps) => {
    console.log("props from previous screen", props.route.params)
    const renderItems = ({ item }: ListRenderItemInfo<EventDataInterface>) => {
        return (
          <StormDataView item={item} navigation={props.navigation} from={'Events'}/>
        )
      }
  return (
    <SafeAreaView style={Styles.Main}>
    <MainHeader title='Events' onPress={() => { }} type="back" />
    <View style={Styles.Container}>
      <View style={Styles.EventTitleView}>
        <Text style={Styles.EventTitleStyle}>{props?.route?.params?.date} {props?.route?.params?.name}</Text>
      </View>
      <View style={{}}>
            <FlatList
              data={EventsData}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
    </View>
  </SafeAreaView>
  )
}

