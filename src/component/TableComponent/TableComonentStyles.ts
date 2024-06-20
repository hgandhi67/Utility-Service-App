import { StyleSheet } from "react-native";
import { Colors } from "../../helpers";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
    container: { flex: 1, paddingTop: hp('1%'),  },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    ColumnHeaderView: {
        padding: wp('1.5%'),
        flexWrap:'wrap'
    },
    dataContainerStyle: {
        flexGrow: 1,
    },
    headerText: {
        textAlign: 'left',
        fontWeight:'500',
        color: Colors.primaryColor
    },
    rowDataView: {
        height: hp('5%'),
        paddingVertical: hp('0.5%'),
        paddingHorizontal: wp('1%'),
        flexWrap:'wrap',
    },
    alternateRow:{
        backgroundColor:Colors.DashboardBgColor
    },
    Rowtext: {
        fontSize: hp('1.5%'),
        textAlign: 'left',
        margin: 0,
    },
   
  });