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
        fontWeight:'bold',
        paddingVertical:hp('0.5%')
    },
    ManagerNameStyle:{
        color:Colors.black,
        fontSize:hp('1.8%'),
        fontWeight:'bold',
        paddingVertical : hp('0.5%')
    },
    FlatlistView:{
        width:wp('92%'),
        alignSelf:'center',
      },
      FlatListStyle:{
        flexGrow:1,
        paddingBottom: hp('15%')
    },
      text: {
        fontSize: hp('2%'),
        color:Colors.black,
        fontWeight:'500'
      },

      //
      pieChartView:{
        width: wp('92%'),
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
        flex: 0.8,
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
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        color: Colors.primaryColor,
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
        // backgroundColor: 'yellow',
        alignItems: 'flex-start'
    },
    DotTextView: {
        flexDirection: 'row',
        alignItems:'center', 
        // backgroundColor:'blue'
    },
   
//
      itemContainer: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageStyle:{
    height : hp('2.5%'),
    width:hp('2.5%')
  },
})