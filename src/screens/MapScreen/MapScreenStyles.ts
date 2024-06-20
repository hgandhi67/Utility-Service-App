import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers/colorsHelper";
const { height, width } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: Colors.DashboardBgColor,
    },
    Container: {
        flex: 1,
    },
    SelectManagerStyle:{
      },
      dropDownMainView:{
        backgroundColor:Colors.white,
       paddingVertical:hp('1%')
        
    },

    //MarkerStyles
    marker: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      markerImage: {
        width: hp('5%'),
        height: hp('5%'),
        tintColor: 'red', 
      },
      driverMarkerImage: {
        width: hp('2.5%'),
        height: hp('2.5%'),
        tintColor: Colors.white,
      },


     
      // Callout bubble
      calloutView: {
        alignItems: 'center',
      },
      calloutBubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: wp('3%'),
        width: wp('70%'),
      },
      calloutText: {
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
      },
      arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
      },
      arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#ccc',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
      },
    
})