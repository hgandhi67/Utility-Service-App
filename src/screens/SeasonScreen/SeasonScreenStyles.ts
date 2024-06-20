import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers/colorsHelper";

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: Colors.DashboardBgColor,
    
    },
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-between',
        // marginVertical:hp('2%')
    },
    LogoImageStyles:{
        height:hp('35%'),
        width:hp('45%')
    },
    LoginView:{
       
       marginTop:hp('2%')
      
    },
    InputButtonView:{
        paddingVertical:hp('2%')
    },
    BottomView:{
    },
    AdminTextStyle:{
        color:Colors.white,
        fontWeight : '500'
    }
});