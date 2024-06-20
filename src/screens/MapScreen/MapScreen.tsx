import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { MainHeader } from '../../component'
import { Styles } from './MapScreenStyles'
import { MapTabComponent } from './MapTabComponent'
import MapView from 'react-native-maps'

export const MapScreen = () => {
  return (
    <SafeAreaView style={Styles.Main}>
      <MainHeader title='Map' onPress={() => { }} type="back" />
      <View style={Styles.Container}>
        <MapTabComponent />
       
      </View>
    </SafeAreaView>
  )
}

