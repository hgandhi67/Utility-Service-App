import { View, Text , SafeAreaView, Image} from 'react-native'
import React,{useEffect} from 'react'
import { Styles } from './SplashscreenStyles'
import { Images } from '../../helpers'
import { NavigationProps } from '../../helpers/interface'

export const Splashscreen = (props : NavigationProps) => {

  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate('Login', {})
    },5000)
  },[])
  return (
    <SafeAreaView style={Styles.Main}>
      <View style={Styles.Container}>
        <Image source={Images.Logo} style={Styles.LogoImageStyles}/>
        </View>
        </SafeAreaView>
  )
}

