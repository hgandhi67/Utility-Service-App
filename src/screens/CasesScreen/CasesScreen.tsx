import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, ListRenderItemInfo, } from 'react-native'
import React from 'react'
import { MainHeader } from '../../component'
import { Styles } from './CasesScreenStyles'
import { Colors, Images } from '../../helpers'
import { BarDatadetails } from '../../Json'
import { PieChart } from 'react-native-gifted-charts'
import { CasesInterface, NavigationProps } from '../../helpers/interface'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';



export const CasesScreen = (props: NavigationProps) => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
    const themeColors = isDarkTheme ? Colors.dark : Colors.light;

    const renderItem = ({ item }: ListRenderItemInfo<CasesInterface>) => {
        const data = [
            { name: 'Closed', value: item.closed, color: Colors.greenColor, legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Open', value: item.open, color: '#ff0000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        ];
        return (
            <TouchableOpacity style={[Styles.pieChartView, { backgroundColor: themeColors.containerBgColor }]} onPress={() => { props.navigation.navigate('CasesDetailScreen', { CaseId: item.id }) }}>
                <View style={Styles.container}>
                    <View style={Styles.chartContainer}>
                        <PieChart
                            data={data}
                            donut
                            innerCircleColor={themeColors.containerBgColor}
                            innerRadius={30}
                            radius={60}
                        />
                    </View>
                    <View style={Styles.detailsContainer}>
                        <View style={Styles.TotalInvoiceView}>
                            <Text style={[Styles.totalText, { color: themeColors.black }]}>Total {item.label}</Text>
                            <Text style={[Styles.totalAmount, { color: themeColors.headerTitle }]}>{item.value}</Text>
                        </View>
                        {data.map((item: any, index: number) => (
                            <View key={index} style={Styles.detailItem}>
                                <View style={Styles.DotTextView}>
                                    <View style={[Styles.dot, { backgroundColor: item.color }]} />
                                    <Text style={[Styles.detailText, { color: themeColors.black }]}>{item.name}</Text>
                                </View>
                                <View style={Styles.AmtView}><Text style={[Styles.detailAmount, { color: themeColors.headerTitle }]}>
                                    {item.value}
                                </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View>
                        <Image source={Images.RightArrowImg} resizeMode='contain' style={Styles.ImageStyle} tintColor={themeColors.black} />
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={[Styles.Main, { backgroundColor: themeColors.dashboardBgColor }]}>

            <MainHeader title='Cases' onPress={() => { }} type="back" />
            <View style={Styles.Container}>
                <View style={Styles.CustomerCountView}>
                    <Text style={[Styles.ManagerNameStyle, { color: themeColors.black }]}>Total Cases</Text>
                    <Text style={[Styles.CustomerCountText, { color: themeColors.headerTitle }]}>88</Text>
                </View>
                <View style={Styles.FlatlistView}>
                    <FlatList
                        contentContainerStyle={Styles.FlatListStyle}
                        data={BarDatadetails}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}

                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

