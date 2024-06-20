import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers/colorsHelper";
const {height, width } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";


export const Styles = StyleSheet.create({
    Main: {
        flex: 1,
        //backgroundColor: Colors.DashboardBgColor,
    },
    Container: {
        flex: 1,
    },
    scrollView: {
        height: height,     
    },
    ScrollViewStyles:{
       paddingBottom:hp('5%'),
       flexGrow:1,
   },
    LogoImageStyles: {
        height: hp('35%'),
        width: hp('45%')
    },
    LoginView: {
        marginTop: hp('2%')
    },
    ProgressWrapperView: {
        width: wp('92%'),
        alignSelf: 'center',
        marginVertical: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressView: {
        width: wp('45%'),
       
        paddingVertical: hp('2%'),
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: wp('2%')
    },
    ProgressText: {
        color: Colors.white,
        fontSize: hp('1.8%'),
        textAlign: 'center',
        padding: wp('1%'),
        width:'70%'
    },
    InputButtonView: {
        paddingVertical: hp('2%')
    },
    BottomView: {
    },
    AdminTextStyle: {
        color: Colors.white,
        fontWeight: '500'
    },
    PiechartView: {
        backgroundColor: Colors.white,
        padding: hp('1%'),
        borderRadius: wp('2%'),
        width: wp('92%')
    },
    //pie chart styles
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
        padding: hp('1%'),
       
    },
    Barcontainer: {
        width: wp('92%'),
        justifyContent: 'space-between',
        alignSelf:'center',
        // backgroundColor: Colors.white,
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
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: wp('1%'),
    },
    TotalInvoiceView: {
    },
    totalText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        // color:Colors.black
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
        margin: hp('1%'),
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
       fontWeight:'500'
    },
    detailAmount: {
        fontSize: hp('1.5%'),
        color: Colors.primaryColor,
        fontWeight:'500',
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
    detailLabel: {
        fontSize: 16,
        color:Colors.black
      },
      ToggleView:{
            paddingHorizontal:wp('1.5%'),
            flexDirection:'row',
            justifyContent:'space-between',
            // backgroundColor:Colors.white
      },
      ImageStyle:{
        height : hp('2.5%'),
        width:hp('2.5%')
      },

      //gfjgjghkjgy
      BarDetailContainer: {
        flexDirection: 'row',
        padding: 10,
        // backgroundColor: '#fff',
        // borderRadius: 8,
        alignItems: 'center',
      },
      column: {
        flex: 1,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      label: {
        fontSize: hp('1.5%'),
        fontWeight:'500',
        // color:Colors.black
      },
      value: {
        fontSize: hp('1.5%'),
        fontWeight:'500',
        color: Colors.primaryColor,
      },
      separator: {
        width: 1,
        height: '100%',
        backgroundColor: '#ddd',
        marginHorizontal: 16,
      },
      FlatlistView:{
        width:wp('92%'),
        alignSelf:'center',
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingVertical: hp('2%'),
        paddingHorizontal:wp('1.5%'),
        marginRight:hp('1%'),
        marginVertical:hp('1%'),
        borderRadius: wp('2%'),
        width:wp('40%'),
        height: hp('10%')
      },
      image: {
        width: hp('5%'),
        height: hp('5%'),
        marginRight: wp('3%'),
      },
      text: {
        fontSize: hp('2%'),
        // color:Colors.black,
        fontWeight:'500'
      },
      HorizontalTab: {
            marginVertical:hp('1%'),
            // borderBottomColor:'#f6f6f6',
            borderBottomWidth:hp('0.2%'),
            width:'100%',
      },
      progressText: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: hp('2%'),
        
      },
      percentageStyle:{
        fontSize:hp('1.5%')
      }
});