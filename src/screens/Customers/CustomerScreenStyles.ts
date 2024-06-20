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
         alignItems:'center',
    },
    CustomerCountView:{
        alignItems:'center',
        justifyContent:'center'
    },
    CustomerCountText:{
        color:Colors.primaryColor,
        fontSize:hp('2.5%'),
        fontWeight:'600',
        paddingVertical:hp('0.5%')
    },
    FlatListItemView:{
        width: wp('92%'),
        backgroundColor: Colors.white,
        alignSelf:'center',
        marginVertical:hp('1%'),
        borderRadius: wp('2%'),
        paddingHorizontal:wp('3%'),
        paddingVertical: hp('1%')
        
      },
      FlatListStyle:{
        flexGrow:1,
        paddingBottom: hp('15%')
    },
    ListFooterViewStyle:{
        paddingBottom: hp('5%')
    },
    PassInputTextStyle: {
        color: Colors.black,
        fontSize: hp('1.8%'),
        alignItems: 'flex-start',
        paddingVertical:0   
    },
      DropDownItemView:{

      },
      ManagerNameStyle:{
        color:Colors.black,
        fontSize:hp('1.8%'),
        fontWeight:'500',
        paddingVertical : hp('0.5%')
    },
    ImageStyle:{
        height : hp('2.5%'),
        width:hp('2.5%')
      },
})