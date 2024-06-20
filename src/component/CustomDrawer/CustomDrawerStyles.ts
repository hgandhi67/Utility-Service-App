import { StyleSheet } from "react-native";
import { Colors } from "../../helpers";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({

    MainStyle:{
        flex:1,
        backgroundColor:Colors.primaryColor,
    },
    HeaderLogoView:{
        alignItems:'center',
        justifyContent:'center',
        
    },
    HeaderLogoStyle:{
        height:hp('15%'),
        width:hp('20%'),
        
    },
    FlatListStyle:{
        flexGrow:1,
        
    },
    ListFooterViewStyle:{
        paddingBottom: hp('50%')
    },
    dataItemStyle:{
        flexDirection:"row",
        alignItems:'center',
        paddingVertical :hp('2%'),
        paddingHorizontal:wp('3%'),
        borderBottomColor:Colors.white,
        borderBottomWidth:hp('0.2%'),    
    }, 
    selectedItem: {
        backgroundColor: Colors.white, 
      },
    DrawerIconStyle:{
        height:hp('4%'),
        width:hp('8%'),
        //backgroundColor:'red'
    },
    selectedTextStyle: {
        color: Colors.primaryColor, 
      },
    InputTextStyle: {
        color: Colors.white,
        paddingLeft: wp('2%'),
        fontSize: hp('1.8%'),
        alignItems: 'flex-start',
        fontWeight:'500'
    },
})