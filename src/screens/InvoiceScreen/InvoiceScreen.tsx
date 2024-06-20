import { View, Text , SafeAreaView} from 'react-native'
import { Styles } from './InvoiceScreenStyles'
import { MainHeader } from '../../component'
import React from 'react'
import { InvoiceTabComponent } from './InvoiceTabComponent'

export const InvoiceScreen = () => {
  return (
    <SafeAreaView style={Styles.Main}>

        <MainHeader title='Invoicing' onPress={() => { }} type="back" />
        <View style={Styles.Container}>
            <InvoiceTabComponent/>
            </View>
            </SafeAreaView>
  )
}

