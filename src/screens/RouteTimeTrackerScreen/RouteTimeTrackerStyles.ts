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
        //alignItems: 'center',
    },
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
    ManagerNameStyle:{
        color:Colors.black,
        fontSize:hp('2%'),
        fontWeight:'500',
        paddingVertical : hp('0.5%')
    },
    ImageStyle:{
        height : hp('2.5%'),
        width:hp('2.5%')
      },
      DriverImageStyle:{
        height : hp('6%'),
        width:hp('6%')
      },
      RouteImageStyle:{
        height : hp('4%'),
        width:hp('4%'),
        // backgroundColor:'red'
      },
      ManagerView:{
        paddingHorizontal:wp('2%')
      },
      FlatListItemView:{
        width: wp('92%'),
        backgroundColor: Colors.white,
        alignSelf:'center',
        marginVertical:hp('1%'),
        borderRadius: wp('2%'),
        padding:hp('1.5%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      flatlistDataView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
       
      },
      TimeView : {
        flexDirection:'row',
        width : wp('40%'),
        alignItems:'center',
        justifyContent:'space-between',
      },
      TimeFieldText:{
        fontSize:hp('1.8%'),
        color:Colors.black
      },
      TimeValueText : {
        fontSize:hp('1.8%'),
        color:Colors.primaryColor
      }

})