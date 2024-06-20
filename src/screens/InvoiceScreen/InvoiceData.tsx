import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from './InvoiceScreenStyles'
import { PieChart } from 'react-native-gifted-charts'

interface Props {
    InvoiceType: string,
    InvoiceData: any,
    TotalInvoice : number
}

export const InvoiceData = ({InvoiceType, InvoiceData, TotalInvoice}: Props) => {
  return (
    <>
    <View  style={Styles.pieChartView}>
         <View style={Styles.TotalInvoiceView}>
          <Text style={Styles.totalText}>{InvoiceType}</Text>
          <Text style={Styles.totalAmount}>${TotalInvoice.toLocaleString()}</Text>
        </View>
      <View style={Styles.chartContainer}>
        <PieChart
          data={InvoiceData}
          donut
          innerRadius={45}
          radius={90}
        />
      </View>
      </View>
    
      <View >
       
        {InvoiceData.map((item: any, index: number) => (
          <View key={index} style={Styles.BarData}>
            <View style={Styles.DotTextView}>
              <View style={[Styles.dot, { backgroundColor: item.color }]} />
              <Text style={Styles.detailText}>{item.text}</Text>
            </View>
            <View style={Styles.AmtView}><Text style={Styles.detailAmount}>
              ${item.value.toLocaleString()}
            </Text>
            </View>
          </View>
        ))}
      </View>

      </>
  )
}

