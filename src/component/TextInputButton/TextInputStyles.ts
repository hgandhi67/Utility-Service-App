import { StyleSheet } from "react-native";
import { Colors } from "../../helpers";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({

    InputBtnView: {
       
        borderRadius:wp('0.8%'),
        alignSelf: 'center',
        backgroundColor:Colors.InputBgColor,
        paddingHorizontal: wp('2%'),
        paddingVertical:hp('0.5%'),
        marginVertical:hp('1%')   
    },
   
    InputTextStyle: {
       // fontFamily: Fonts.Medium,
        color: Colors.white,
        fontSize: hp('4%'),
        alignItems: 'center',
    },
    PassInputTextStyle: {
        //fontFamily: Fonts.Medium,
        color: Colors.white,
        fontSize: hp('1.8%'),
         textAlign:'center',
        paddingVertical:0   
    },
   
})