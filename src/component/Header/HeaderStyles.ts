import { StyleSheet , Dimensions } from "react-native";
import {  Colors } from "../../helpers";
 
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({

    headerViewStyle: {
        flex: 0, 
        flexDirection: 'row', 
        zIndex: 30, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        //backgroundColor: Colors.DashboardBgColor,
     
         paddingHorizontal : hp('0.5%'),
        paddingVertical:hp('3%')
    },
    LeftComponent:{
        alignSelf:'center',
        justifyContent:'center',
        flex: 1,
       // backgroundColor:'yellow'
        

    },
    MiddleComponent:{
        // flex: 6.5  , 
        alignItems:'center', 
        justifyContent:'center'
    },
    RightComponent:{
        // flex: 2.5,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        
       
    },
    RoleView:{
        //backgroundColor:Colors.primaryColor,
        paddingVertical:hp('0.3%'),
        paddingHorizontal:wp('2.5%'),
        borderRadius:wp('5%')
    },
    ProfilePicStyle:{
        height:hp('7.5%'),
        width:hp('7.5%'),
        borderRadius: hp('7.5%'),
        
    },
    HeaderLogo:{
        height:hp('5%'),
        width:wp('20%'),
        
    },
    BellIconStyle:{
        height:hp('9%'),
        width:wp('9%')
    },
    RoleText:{
        // color:Colors.primaryColor,
        //fontFamily:Fonts.Regular,
        fontSize:hp('2.5%'),
        fontWeight:'500'
    },
    StatusCircle:{
        height:hp('2%'),
        width:hp('2%'),
        position:'absolute',
        bottom:1,
        right:0
    },
    StatusInnView:{
        flexDirection:'row',
    },
    BackButtonStyle:{
        height:hp('5%'),
        width:hp('5%')
    },
    backBtnView:{
        alignItems:'center',
        justifyContent:'center',
    },
    DrawerImgStyle:{
        height:hp('4%'),
        width:hp('4%')
    },
    BackIconImgStyle:{
        height:hp('3%'),
        width:hp('3%')
    },
    SwitchContainer : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:wp('1%')

    }
  
})