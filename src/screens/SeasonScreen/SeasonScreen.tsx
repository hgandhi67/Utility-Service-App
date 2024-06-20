import { View, Text , SafeAreaView} from 'react-native'
import React from 'react'
import { MainHeader } from '../../component'
import { Styles } from './SeasonScreenStyles'

export const SeasonScreen = () => {
  return (
    <SafeAreaView style={Styles.Main}>
     
      <MainHeader title='Dashboard' onPress={() => { }}  type="Home"/>
      <View style={Styles.Container}>
      </View>
      </SafeAreaView>
  )
}

