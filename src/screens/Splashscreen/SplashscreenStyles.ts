import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers/colorsHelper";

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
    },
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    LogoImageStyles:{
        height:hp('45%'),
        width:hp('45%')
    }
});