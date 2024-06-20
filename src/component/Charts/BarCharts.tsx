import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from './ChartStyle'
import { BarChart } from 'react-native-gifted-charts'
import { Colors } from '../../helpers'

interface Props {
  ChartData: any,
  theme: boolean;
}
export const BarCharts = ({ ChartData, theme }: Props) => {
  const themeColors = theme ? Colors.dark : Colors.light;
  return (
    <View style={[Styles.Barcontainer, {backgroundColor : themeColors.containerBgColor} ]}>
      <View style={Styles.chartContainer}>
        <BarChart
          data={ChartData.map(item => ({
            value: item.value,
            frontColor: item.color,
          }))}
          barWidth={45} 
         shiftX={-25}
         xAxisLabelsVerticalShift={-15}
         shiftY={-25}
           spacing={3}
          hideOrigin={true}
          yAxisThickness={-30}
          xAxisThickness={-5}
            hideAxesAndRules={true}

        />
      </View>
      <View style={Styles.detailsContainer}>
        <View style={Styles.TotalInvoiceView}>
          <Text style={[Styles.totalText, {color:themeColors.black}]}>Storm:</Text>
          <Text style={[Styles.value, {color:themeColors.headerTitle}]}>01/22/2024</Text>
          <Text style={[Styles.value, {color:themeColors.headerTitle}]}>02:01:00</Text>

        </View>
        <View style={Styles.TotalInvoiceView}>
          <Text style={[Styles.totalText, {color:themeColors.black}]}>Events:</Text>
          <Text style={[Styles.value, {color:themeColors.headerTitle}]}>01/22/2024</Text>
          <Text style={[Styles.value, {color:themeColors.headerTitle}]}>02:01:00</Text>

        </View>
        {ChartData.map((item: any, index: number) => (
          <View key={index} style={Styles.detailItem}>
            <View style={Styles.DotTextView}>
              <View style={[Styles.dot, { backgroundColor: item.color }]} />
              <Text style={[Styles.detailText, {color:themeColors.black}]}>{item.text}</Text>
            </View>
            <View style={Styles.AmtView}><Text style={[Styles.detailAmount, {color:themeColors.headerTitle}]}>
              {item.value}%
            </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}


