import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers/colorsHelper";
const {height, width } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: Colors.DashboardBgColor,
    },
    Container: {
        flex: 1,
    },
    EventTitleView:{
        backgroundColor:Colors.white,
        padding:hp('2%'),
        alignItems:'center',
        marginBottom:hp('1%')
    },
    EventTitleStyle:{
        fontSize:hp('2%'),
        fontWeight:'500',
        color:Colors.primaryColor
    }
})