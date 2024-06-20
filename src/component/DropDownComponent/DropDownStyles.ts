import { StyleSheet, } from "react-native";
import { Colors } from "../../helpers/colorsHelper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
    DropButtomMainView: {
        marginVertical: hp('0.5%')
    },
    dropdown: {
        paddingVertical: hp('0.5%'),
        alignSelf: 'center',
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.greyColor,
        borderWidth: wp('0.2%'),
        paddingHorizontal: wp('3%'),
        width: wp('92%')
    },
    PassInputTextStyle: {
        color: Colors.dropDownTextColor,
        fontSize: hp('1.5%'),
        alignItems: 'flex-start',
        fontWeight: '500',
    },
    iconStyle: {
        width: wp('3%'),
        height: hp('3%'),
    },
    ChangeShiftTitleText: {
        fontSize: hp('1.5%'),
        fontWeight: '500',
        color: Colors.dropDownTextColor
    },
    DropDownView: {
        width: wp('92%'),
        alignSelf: 'center',
        paddingVertical: hp('0.5%')

    },
})