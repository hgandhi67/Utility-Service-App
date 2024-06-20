import { View, Text, SafeAreaView, ListRenderItemInfo, FlatList} from 'react-native'
import { DropDownButton, MainHeader } from '../../component'
import { Styles } from './EventDetailScreenStyles'
import { Colors } from '../../helpers'
import React from 'react'
import { NavigationProps } from '../../helpers/interface'

import { EventProgressData } from '../../Json'
import { BarChart } from 'react-native-gifted-charts'

type Item = {
  id: number;
  role: string;
  name: string;
  completed: number;
  inProgress: number;
  open: number
};
export const EventDetailScreen = (props: NavigationProps) => {

  const renderFooter = () => (
    <View style={Styles.ListFooterViewStyle}> 
     
    </View>
  );
    
  const renderItems = ({ item }: ListRenderItemInfo<Item>) => {
      const data = [
          { name: 'completed', value: item.completed, color: '#59e66f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'inProgress', value: item.inProgress, color: '#ffd166', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          { name: 'Open', value: item.open, color: '#ef476f', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      ];
      return (
          <View style={Styles.pieChartView}>
              <View style={Styles.container}>
                  <View style={Styles.chartContainer}>
                  <BarChart
          data={data.map(item => ({
            value: item.value,
            frontColor: item.color,
          }))}
          barWidth={35} 
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
                          <Text style={Styles.totalText}>{item.role}</Text>
                          <Text style={Styles.totalAmount}>(AS) {item.name}</Text>
                      </View>
                      <View style={Styles.ProgressDataStyle}>
                      {data.map((item: any, index: number) => (
                          <View key={index} style={Styles.detailItem}>
                              <View style={Styles.DotTextView}>
                                  <View style={[Styles.dot, { backgroundColor: item.color }]} />
                                  <Text style={Styles.detailText}>{item.name}</Text>
                              </View>
                              <View style={Styles.AmtView}><Text style={Styles.detailAmount}>
                                  {item.value}%
                              </Text>
                              </View>
                          </View>
                      ))}
                      </View>
                  </View>
                

              </View>
          </View>
      );
  }
  return (
    <SafeAreaView style={Styles.Main}>
    <MainHeader title='Details' onPress={() => { }} type="back" />
    <View style={Styles.Container}>
    <View style={Styles.dropDownMainView}>
          <DropDownButton Title={'dfdsfds'} navigation={props.navigation} type='storm' />
          <DropDownButton Title={'ddgfdhf'} navigation={props.navigation} type='event' />
          </View>
      <View style={{}}>
            <FlatList
              data={EventProgressData}
              contentContainerStyle={Styles.FlatListStyle}
                        scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
              keyExtractor={(item) => item.id.toString()}
              ListFooterComponent={renderFooter}
              ListEmptyComponent={() => (
                  <Text style={Styles.PassInputTextStyle}>No Data Found</Text>
              )}

            />
          </View>
    </View>
  </SafeAreaView>
  )
}

