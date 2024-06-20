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
      ImageStyle:{
        height : hp('2.5%'),
        width:hp('2.5%')
      },
      ManagerNameStyle:{
        color:Colors.black,
        fontSize:hp('1.8%'),
        fontWeight:'500',
    },
    EventDataView:{
      flexDirection:'row',
      justifyContent:'space-between'
      
    },
    padding:{
      paddingLeft : wp('2.5%')
    }
})