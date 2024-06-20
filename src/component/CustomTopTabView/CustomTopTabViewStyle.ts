import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers/colorsHelper";
const {height, width } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
  activeTabStyle: { 
    height: null,
    top: 0,
    backgroundColor:  Colors.InputBgColor , 
},
tabBar: {
    height: '100%', 
    top: 0 , 
    backgroundColor:'', 
},
activeTabTextColor: {
  color: Colors.white
},
tabTextStyle:{
    fontSize:hp('1.3%')
},
tabTextColor: {
    color: Colors.white, 
},
TabIndicatorStyle: { 
    backgroundColor:Colors.primaryColor,  
    //justifyContent:'center',
    // alignItems:'center',
    paddingVertical:hp('0.5%'),
    paddingHorizontal:0
},
})