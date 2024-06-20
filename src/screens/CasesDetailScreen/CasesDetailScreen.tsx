import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, ListRenderItemInfo, } from 'react-native'
import React from 'react'
import { MainHeader } from '../../component'
import { Styles } from './CasesDetailScreenStyles'
import { Colors, Images } from '../../helpers'
import { CasesDetailsData } from '../../Json'
import { CasesDetailsInterface, NavigationProps } from '../../helpers/interface'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export const CasesDetailScreen = (props: NavigationProps) => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
    const themeColors = isDarkTheme ? Colors.dark : Colors.light;
    const caseId = props.route.params.CaseId;
    console.log("case id is--------->", caseId)
    const filteredData = CasesDetailsData.filter((item) =>
        item.caseId === caseId
        //console.log("item is ------>", filteredData)
    );
    console.log("filtered data is ----->", filteredData)
    const renderItem = ({ item }: ListRenderItemInfo<CasesDetailsInterface>) => {
        return (
            <TouchableOpacity style={[Styles.pieChartView, { backgroundColor: themeColors.containerBgColor }]}>
                <View style={Styles.container}>
                    <View style={Styles.chartContainer}>
                        {caseId == 10 ? <Image source={Images.BellIcon} resizeMode='contain' style={Styles.ImageStyle} /> :
                            <Image source={Images.ClockImg} resizeMode='contain' style={Styles.ImageStyle} />
                        }
                    </View>
                    <View style={Styles.detailsContainer}>
                        <View style={Styles.detailItem}>
                            <Text style={[Styles.totalText, { color: themeColors.black }]} >{item.CaseName}</Text>
                            {caseId == 10 ?
                                <TouchableOpacity style={[Styles.RepliedBtnView, { backgroundColor: Colors.greenColor }]}>
                                    <Text style={Styles.BtnTextStyle}>Finished</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={Styles.RepliedBtnView}>
                                    <Text style={Styles.BtnTextStyle}>ETA Replied</Text>
                                </TouchableOpacity>}
                        </View>
                        <View style={Styles.TotalInvoiceView}>
                            <View style={Styles.CaseDataTitleView}>
                                <Text style={[Styles.totalText, { color: themeColors.black }]}>Case Owner:</Text>
                            </View>
                            <View>
                                <Text style={[Styles.totalAmount, { color: themeColors.headerTitle }]}>{item.owner}</Text>
                            </View>
                        </View>
                        <View style={Styles.TotalInvoiceView}>
                            <View style={Styles.CaseDataTitleView}>
                                <Text style={[Styles.totalText, { color: themeColors.black }]}>Location:</Text>
                            </View>
                            <View>
                                <Text style={[Styles.totalAmount, { color: themeColors.headerTitle }]}>{item.location}</Text>
                            </View>
                        </View>
                        <View style={Styles.TotalInvoiceView}>
                            <View style={Styles.CaseDataTitleView}>
                                <Text style={[Styles.totalText, { color: themeColors.black }]}>Date:</Text>
                            </View>
                            <View>
                                <Text style={[Styles.totalAmount, { color: themeColors.headerTitle }]}>{item.date}</Text>
                            </View>
                        </View>
                        <View style={Styles.TotalInvoiceView}>
                            <View style={Styles.CaseDataTitleView}>
                                <Text style={[Styles.totalText, { color: themeColors.black }]}>Time:</Text>
                            </View>
                            <View>
                                <Text style={[Styles.totalAmount, { color: themeColors.headerTitle }]}>{item.time}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={[Styles.Main, { backgroundColor: themeColors.dashboardBgColor }]}>

            <MainHeader title='Cases' onPress={() => { }} type="back" />
            <View style={Styles.Container}>
                <View style={Styles.FlatlistView}>
                    <FlatList
                        contentContainerStyle={Styles.FlatListStyle}
                        data={filteredData}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}

                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

