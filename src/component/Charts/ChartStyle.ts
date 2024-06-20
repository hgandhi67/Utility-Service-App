import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers/colorsHelper";
const { height, width } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
    chartContainer: {
        //backgroundColor:'red' ,
        margin: 0
    },
    Barcontainer: {
        width: wp('92%'),
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        padding: hp('1%'),
        marginVertical: hp('1%'),
        borderRadius: wp('2%'),
    },
    detailsContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: hp('3%'),
        marginLeft:wp('2%')
    },
    TotalInvoiceView: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalText: {
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
        color: Colors.black
    },

    detailItem: {
        flexDirection: 'row',
        width: '100%',
        marginTop:hp('1%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp('0.3%'),
    },
    dot: {
        width: hp('1.5%'),
        height: hp('1.5%'),
        borderRadius: hp('1.25%'),
        marginRight: wp('1%'),
    },
    detailText: {
        fontSize: hp('1.5%'),
        color: Colors.black,
        fontWeight: '700'
    },
    detailAmount: {
        fontSize: hp('1.5%'),
        color: Colors.primaryColor,
        fontWeight: '700',
        alignSelf: 'flex-end'
    },
    AmtView: {
        alignItems: 'flex-start'
    },
    DotTextView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: hp('1.5%'),
        fontWeight:'500',
        color: Colors.black
    },
    // detailValue: {
    //     fontSize: 16,
    //     color: '#1E90FF',
    // },
    // detailColumn: {
    //     flex: 1,
    // },
    value: {
        fontSize: hp('1.5%'),
        color: Colors.primaryColor,
        fontWeight:'500'
    },
})