import { View, Text, SafeAreaView, ScrollView, Image, FlatList, ListRenderItemInfo, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState, useEffect, } from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors, Images } from '../../helpers';
import { Styles } from './DashboardScreenStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MainHeader, TableComponent, BarCharts } from '../../component';
import { NavigationProps, Item } from '../../helpers/interface';
import { PieChart } from 'react-native-gifted-charts';
import { SeasonInvoiceData, BarDatadetails, Stormbardata, FlatListData, TableData } from '../../Json';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';



const COLUMN_NAMES = ['Types', 'Invoiced', 'Expected cost', 'Profit'];


const widthArr = [105, 75, 110, 100, 20];
export const DashboardScreen = (props: NavigationProps) => {
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  const themeColors = isDarkTheme ? Colors.dark : Colors.light;
  console.log("theme ------->", isDarkTheme)
  const [totalInvoicing, setTotalInVoicing] = useState(201000)
  const [openIndex, setOpenIndex] = useState(false);
  const totalCases = 88;
  const half = Math.ceil(BarDatadetails.length / 2);
  const leftColumn = BarDatadetails.slice(0, half);
  const rightColumn = BarDatadetails.slice(half);


  const renderItems = ({ item }: ListRenderItemInfo<Item>) => {
    console.log("item is ----->", item)
    return (
      <TouchableOpacity onPress={() => {
        if (item.id == 1 && item.name == 'Route Time Tracker') {
          props.navigation.navigate('RouteTimeTracker', {})
        } else if (item.id == 2 && item.name == 'Drivers') {
          props.navigation.navigate('DriverScreen', {})
        } else {
          props.navigation.navigate('CustomerScreen', {})
        }
      }}>
        <View style={[Styles.itemContainer, { backgroundColor: themeColors.containerBgColor }]}>
          <Image source={item.image} style={Styles.image} tintColor={themeColors.headerTitle} />
          <Text style={[Styles.text, { color: themeColors.black }]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={[Styles.Main, { backgroundColor: themeColors.dashboardBgColor }]}>
      <MainHeader title='Dashboard' onPress={() => { }} type="Home" />
      <View style={Styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false} style={Styles.Main}
          contentContainerStyle={Styles.ScrollViewStyles}>
          <View style={Styles.ProgressWrapperView}>
            <View style={[Styles.progressView, { backgroundColor: themeColors.primaryColor }]}>
              <Text style={Styles.ProgressText}>Customer Satisfaction</Text>
              <AnimatedCircularProgress
                size={100}
                width={20}
                fill={75}
                style={{ height: 100 / 2 }}
                tintColor={Colors.white}
                rotation={270}
                padding={0}
                arcSweepAngle={180}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor={themeColors.progressColor} >
                {
                  (fill) => (
                    <Text style={{ color: Colors.white }}>
                      <Text style={Styles.progressText}>{Math.round(fill)}</Text>
                      <Text style={Styles.percentageStyle} >%</Text>
                    </Text>
                  )
                }
              </AnimatedCircularProgress>
            </View>
            <View style={[Styles.progressView, { backgroundColor: themeColors.primaryColor }]}>
              <Text style={Styles.ProgressText}>Health of Job Progress</Text>
              <AnimatedCircularProgress
                size={100}
                width={20}
                fill={75}
                tintColor={Colors.white}
                rotation={270}
                style={{ height: 100 / 2 }}
                arcSweepAngle={180}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor={themeColors.progressColor} >
                {
                  (fill) => (
                    <Text style={{ color: Colors.white }}>
                      <Text style={Styles.progressText}>{Math.round(fill)}</Text>
                      <Text style={Styles.percentageStyle} >%</Text>
                    </Text>

                  )
                }
              </AnimatedCircularProgress>
            </View>
          </View>
          <TouchableOpacity style={[Styles.Barcontainer, { backgroundColor: themeColors.containerBgColor }]} onPress={() => { props.navigation.navigate('CasesScreen', {}) }}>
            <View style={Styles.BarchartContainer}>
              <View style={Styles.ImageView}>
                <Image source={Images.BarChartImg} style={Styles.BarChartImageStyle} resizeMode='contain' />
              </View>
              <View style={Styles.CasesView}>
                <Text style={[Styles.totalText, { color: themeColors.black }]}>Total Cases</Text>
                <Text style={[Styles.totalAmount, { color: themeColors.headerTitle }]}>{totalCases}</Text>
              </View>
            </View>

            <View style={Styles.BarDetailContainer}>
              <View style={Styles.column}>
                {leftColumn.map((item: any, index: number) => (
                  <View key={index} style={Styles.row}>
                    <Text style={[Styles.label, { color: themeColors.black }]}>{item.label}</Text>
                    <Text style={[Styles.value, { color: themeColors.headerTitle }]}>{item.closed}/{item.value}</Text>
                  </View>
                ))}
              </View>
              <View style={Styles.separator} />
              <View style={Styles.column}>
                {rightColumn.map((item: any, index: number) => (
                  <View key={index} style={Styles.row}>
                    <Text style={[Styles.label, { color: themeColors.black }]}>{item.label}</Text>
                    <Text style={[Styles.value, { color: themeColors.headerTitle }]}>{item.closed}/{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
          <View style={Styles.FlatlistView}>
            <FlatList
              data={FlatListData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItems}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <TouchableOpacity onPress={() => { props.navigation.navigate('InvoiceScreen', {}) }} style={[Styles.pieChartView, { backgroundColor: themeColors.containerBgColor, paddingBottom: openIndex ? hp('2%') : hp('1%') }]}>
            <View style={Styles.container}>
              <View style={Styles.chartContainer}>
                <PieChart
                  data={SeasonInvoiceData}
                  donut
                  innerRadius={45}
                  radius={90}
                />
              </View>
              <View style={Styles.detailsContainer}>
                <View style={Styles.TotalInvoiceView}>
                  <Text style={[Styles.totalText, { color: themeColors.black }]}>Total Invoicing</Text>
                  <Text style={[Styles.totalAmount, { color: themeColors.headerTitle }]}>${totalInvoicing.toLocaleString()}</Text>
                </View>
                {SeasonInvoiceData.map((item: any, index: number) => (
                  <View key={index} style={Styles.detailItem}>
                    <View style={Styles.DotTextView}>
                      <View style={[Styles.dot, { backgroundColor: item.color }]} />
                      <Text style={[Styles.detailText, { color: themeColors.black }]}>{item.text}</Text>
                    </View>
                    <View style={Styles.AmtView}><Text style={[Styles.detailAmount, { color: themeColors.headerTitle }]}>
                      ${item.value.toLocaleString()}
                    </Text>
                    </View>
                  </View>
                ))}
              </View>

            </View>
            <View style={[Styles.HorizontalTab, { borderBottomColor: themeColors.hrTabColor }]} />
            <View style={Styles.ToggleView}>
              <Text style={[Styles.text, { color: themeColors.black }]}>Contract Invoicing</Text>
              <TouchableOpacity onPress={() => { setOpenIndex(!openIndex) }}>
                <Image source={openIndex ? Images.DownArrowImg : Images.RightArrowImg} resizeMode='contain' style={Styles.ImageStyle} tintColor={themeColors.black} />
              </TouchableOpacity>
            </View>
            {openIndex && (
              <TableComponent TableData={TableData} Columname={COLUMN_NAMES} widthArray={widthArr} />
            )}

          </TouchableOpacity>
          <TouchableOpacity onPress={() => { props.navigation.navigate('StormScreen', {}) }}>
            <BarCharts ChartData={Stormbardata} theme={isDarkTheme} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

