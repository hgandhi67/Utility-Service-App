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
    //pie chart styles
    pieChartView:{
        width: wp('92%'),
        backgroundColor: Colors.white,
        alignSelf:'center',
        marginTop:hp('2%'),
        marginBottom:hp('1%'),
        borderRadius: wp('2%'),
        padding:hp('1.5%')    
    },
    BarData: {
        width: wp('92%'),
        flexDirection:'row',
        justifyContent: 'space-between',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: Colors.white,
        paddingVertical: hp('2%'),
        paddingHorizontal:wp('2.5%'),
        marginVertical:hp('1%'),
        borderRadius: wp('2%'),
    },
   
    BarchartContainer:{
        flexDirection:'row',
        marginHorizontal: hp('1%'),
        alignItems:'center'
    },
    // repeted styles
    chartContainer: { 
        alignItems:'center',
        justifyContent: 'center',
        padding: hp('1%'),   
    },
   
    TotalInvoiceView: {
        alignItems:'center',
        justifyContent:'center'
    },
    totalText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color:Colors.black
    },
    totalAmount: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    detailItem: {
        flexDirection: 'row',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: hp('1%'),
    },
    dot: {
        width: hp('3%'),
        height: hp('3%'),
        borderRadius: hp('1%'),
        marginRight: wp('1%'),
    },
    detailText: {
       fontSize: hp('1.5%'),
       paddingLeft:wp('1%'),
       color:Colors.black,
       fontWeight:'700'
    },
    detailAmount: {
        fontSize: hp('1.5%'),
        color: '#1E90FF',
        alignSelf: 'flex-end',
        paddingRight:wp('2%'),
        fontWeight:'700'
    },
    AmtView: {
        // backgroundColor: 'yellow',
        alignItems: 'flex-start'
    },
    DotTextView: {
        flexDirection: 'row',
        alignItems:'center', 
        //backgroundColor:'blue'
    },
    detailLabel: {
        fontSize: 16,
        color:Colors.black
      },
})