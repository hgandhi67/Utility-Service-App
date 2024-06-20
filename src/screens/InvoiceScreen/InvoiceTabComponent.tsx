import { View, Text } from 'react-native'
import React from 'react'
import { CustomTopTabView } from '../../component';
import { Styles } from './InvoiceScreenStyles';
import { PieChart } from 'react-native-gifted-charts';
import { SeasonInvoiceData, EventInvoiceData, StormInvoiceData } from '../../Json';
import { InvoiceData } from './InvoiceData';

export const InvoiceTabComponent = () => {

    const SeasonInvoice = SeasonInvoiceData.reduce((accumulator, item) => accumulator + item.value, 0);
    const EventInvoice = EventInvoiceData.reduce((accumulator, item) => accumulator + item.value, 0);
    const StormInvoice = EventInvoiceData.reduce((accumulator, item) => accumulator + item.value, 0);
    const StormRoute = () => (
        <InvoiceData  InvoiceData={StormInvoiceData} InvoiceType='Total Storm Invoicing' TotalInvoice={StormInvoice}/>
      );
      
      const EventRoute = () => (
        <InvoiceData  InvoiceData={EventInvoiceData} InvoiceType='Total Event Invoicing' TotalInvoice={EventInvoice}/>
      );
      const SeosonRoute = () => (
        <InvoiceData  InvoiceData={SeasonInvoiceData} InvoiceType='Total Season Invoicing' TotalInvoice={SeasonInvoice}/>
      );
      
      const routes = [
        { key: 'first', title: 'Storm', component: StormRoute },
        { key: 'second', title: 'Event', component: EventRoute },
        { key: 'third', title: 'Seaoson', component: SeosonRoute },
      ];
  return (
    <CustomTopTabView routes={routes} />
  )
}

