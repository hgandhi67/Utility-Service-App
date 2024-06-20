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
    },
    dropDownMainView:{
        backgroundColor:Colors.white,
       paddingVertical:hp('1%')
        
    },

    ////////
    pieChartView:{
        width: wp('92%'),
        backgroundColor: Colors.white,
        alignSelf:'center',
        marginVertical:hp('1%'),
        borderRadius: wp('2%'),
        
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: hp('1%'),
       
    },
    Barcontainer: {
        width: wp('92%'),
        justifyContent: 'space-between',
        alignSelf:'center',
        backgroundColor: Colors.white,
        padding: hp('1%'),
        marginVertical:hp('1%'),
        borderRadius: wp('2%'),
    },
   
    BarchartContainer:{
        flexDirection:'row',
        marginHorizontal: hp('1%'),
        alignItems:'center'
    },
    ImageView:{
        paddingHorizontal:hp('1%')
    },
    BarChartImageStyle:{
        height:hp('6%'),
        width:hp('6%'),
    },
    CasesView:{
        paddingLeft:wp('2%'),
        flexDirection:'column',
        justifyContent:'space-between'
    },
    chartContainer: {    
    },
    detailsContainer: {
        flex: 0.9,
        alignItems: 'flex-start',
        paddingHorizontal: wp('1%'),
    },
    TotalInvoiceView: {
    },
    totalText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color:Colors.black
    },
    totalAmount: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    detailItem: {
        flexDirection: 'row',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: hp('0.5%'),
    },
    dot: {
        width: hp('1.5%'),
        height: hp('1.5%'),
        borderRadius: hp('1.25%'),
        marginRight: wp('1%'),
    },
    detailText: {
        fontSize: hp('1.5%'),
        color:Colors.black,
        fontWeight:'bold'
    },
    detailAmount: {
        fontSize: hp('1.5%'),
        fontWeight:'bold',
        color: Colors.primaryColor,
        alignSelf: 'flex-end'
    },
    AmtView: {
        alignItems: 'flex-start'
    },
    DotTextView: {
        flexDirection: 'row',
        alignItems:'center', 
    },
    detailLabel: {
        fontSize: 16,
        color:Colors.black
      },
      detailValue: {
        fontSize: 16,
        color: '#1E90FF',
      },
      ProgressDataStyle:{
        marginVertical:hp('1.5%')
      },

      ///flatlist style
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
})