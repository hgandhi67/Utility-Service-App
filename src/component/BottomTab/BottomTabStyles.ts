import { StyleSheet , Dimensions } from "react-native";
// import { Fonts } from "../../helpers/fontsHelper";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../helpers";


export const Styles = StyleSheet.create({

    TabIconStyle:{
        height:hp('5%'),
        width:hp('4%'),
    },
   
    TabTextStyle :{
        // fontFamily: Fonts.Medium,
        fontSize: hp('2%'),
        //paddingTop: hp('0.2%'),
    },
    TabStyle:{
        flex:1,
    },
    TabIconViewStyle:{
        alignItems: 'center', 
        alignSelf:'center',
        justifyContent:'center', 
        
    },
    customTabStyles:{
        // backgroundColor:Colors.tabColor,
        height:hp('8%'),
        alignItems:'center',
        flexDirection:'row'
    }
})