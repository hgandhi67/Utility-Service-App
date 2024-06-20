import { View, Text, SafeAreaView, Image } from 'react-native'
import { Styles } from './LoginScreenStyles'
import React, { useState, useEffect } from 'react'
import { Images } from '../../helpers'
import { InputButton, Buttons } from '../../component'
import { NavigationProps } from '../../helpers/interface'


export const LoginScreen = (props : NavigationProps) => {
  const [username, setUserName] = useState('Test')
  const [password, setPassword] = useState('Test')

  const OnPressLogin = () => {
    if (password.length <= 0 && username.length <= 0) {
      return;
    }
props.navigation.navigate('Drawer', {})


  }

  return (
    <SafeAreaView style={Styles.Main}>
      <View style={Styles.Container}>
        <View style={Styles.LoginView}>
          <Image source={Images.Logo} style={Styles.LogoImageStyles} />
          <View style={Styles.InputButtonView}>
            <InputButton
              inputType='text'
              placeholder={'Enter Username'}
              value={username}
              onchangeText={(text: any) => { setUserName(text) }}
              OnPress={() => { }}
            />
            <InputButton
              inputType='password'
              placeholder={'Enter Password'}
              value={password}
              onchangeText={(text: any) => { setPassword(text) }}
              OnPress={() => { }}
            />
          </View>
          <Buttons
            title={'Login'}
            type='login'
            onPress={OnPressLogin}
          />
        </View>
        <View style={Styles.BottomView}>

          <Text style={Styles.AdminTextStyle}>Admin App</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}


