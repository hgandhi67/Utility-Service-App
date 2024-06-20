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
    DriverView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:wp('4%'),
        paddingVertical:hp('1%')
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
    ManagerNameStyle:{
        color:Colors.black,
        fontSize:hp('1.8%'),
        fontWeight:'500',
        paddingVertical : hp('0.5%')
    },

    //select area manager view
    SelectManagerView:{
        width: wp('92%'),
        backgroundColor: Colors.white,
        alignSelf:'center',
        marginVertical:hp('1%'),
        borderRadius: wp('2%'),
        padding:hp('1.5%'),
        borderColor : Colors.primaryColor,
        borderWidth : wp('0.5%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    ManagerTextStyle:{
        color:Colors.primaryColor,
        fontSize:hp('1.8%')
    },
    ManagerView:{
        paddingHorizontal:wp('2%')
      },
      ImageStyle:{
        height : hp('2.5%'),
        width:hp('2.5%')
      },
      SelectManagerStyle:{
        alignItems:'center',
        alignSelf:'center',
        paddingVertical:hp('1%')
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
      PassInputTextStyle: {
        color: Colors.black,
        fontSize: hp('1.8%'),
        alignItems: 'flex-start',
        paddingVertical:0   
    },  

})