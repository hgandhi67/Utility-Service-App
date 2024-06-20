import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Table,  Row } from 'react-native-table-component';
import { Colors } from '../../helpers';
import { Styles } from './TableComonentStyles';
import {  useSelector  } from 'react-redux';
import  { RootState } from '../../redux/store';

interface Props  { 
TableData : any,
Columname : any,
widthArray : any
}
export const TableComponent = ({TableData, Columname , widthArray} : Props) => {
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  const themeColors = isDarkTheme ? Colors.dark : Colors.light;
  return (
    <View style={Styles.container}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Table >
      <Row data={Columname}  widthArr={widthArray} style={Styles.ColumnHeaderView} textStyle={{...Styles.headerText, color:themeColors.headerTitle}}/>
    </Table>
    <ScrollView style={[Styles.dataWrapper, ]} showsVerticalScrollIndicator={false}  contentContainerStyle={Styles.dataContainerStyle}>
     
      <Table>
      {
      TableData.map((rowData, index) => (
        <>
        <Row
          key={rowData.id}
          data={[
            rowData.Types, 
            rowData.Invoiced, 
            rowData.Expected_cost, 
            rowData.Profit, 
           
          ]}
          widthArr={widthArray}
          style={[Styles.rowDataView, (index === 0 || index === 2 || index === 4) && {backgroundColor:themeColors.tableRowColor}]}
          textStyle={{...Styles.Rowtext, color:themeColors.black}}
        />
       
        </>
      ))
    }
      </Table>
      </ScrollView> 
      </View>
    </ScrollView>
  </View>
  )
}

