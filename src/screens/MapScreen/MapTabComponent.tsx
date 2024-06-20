import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, ListRenderItemInfo } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScreenRoute } from '../../helpers/interface';
import { Styles } from './MapScreenStyles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation, } from '@react-navigation/native';
import MapView, {Marker, Callout} from 'react-native-maps'
import { DropDownButton } from '../../component';
import { StromDropDown, EventsDropDown, CustomerData } from '../../Json';
import { CustomTopTabView } from '../../component';

export type Item = {
  id: number;
  name: string;
  company: string
}

interface navigation {
  navigate: (screenName: string, params: object) => void;
}
export const MapTabComponent = () => {
  const [markers, setMarkers] = useState([]);
  const navigation: navigation = useNavigation();


  const customerLocations = [
    { id: 1, name: 'Area Manager : Elijah', latitude: 37.78825, longitude: -122.4324 },
    { id: 2, name: 'Customer 2', latitude: 37.75825, longitude: -122.4524 },
    { id: 3, name: 'Customer 3', latitude: 37.76825, longitude: -122.4424 },
    
  ];
  const EventLocations = [
    { id: 1, name: 'Greencastle of Barrington', latitude: 37.78825, longitude: -122.4324 , location: '445 E Main St Barrington', jobNo : '073555'},
    { id: 2, name: 'Greencastle of Barrington', latitude: 37.75825, longitude: -122.4524 , location: '445 E Main St Barrington', jobNo : '073555'},
    { id: 3, name: 'Greencastle of Barrington', latitude: 37.76825, longitude: -122.4424 , location: '445 E Main St Barrington', jobNo : '073555'},
    
  ];

  const WeakestDriverTab = () => {
    const CustomMarker = () => (
      <View style={[Styles.marker, { backgroundColor: 'red' } ]}>
        <Image source={require('../../assets/Images/taxi-driver.png')} style={Styles.driverMarkerImage} />
      </View>
    );
    return (
      <View style={Styles.SelectManagerStyle}>
        <MapView
          style={{ height: '100%', width: '100%' }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {customerLocations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.name}
          >
            <CustomMarker/>
          
             <Callout tooltip>
              <View style={Styles.calloutView}>
                <View style={Styles.calloutBubble}>
                  <Text style={Styles.calloutText}>{location.name}</Text>
                </View>
                <View style={Styles.arrowBorder} />
                <View style={Styles.arrow} />
              </View>
            </Callout>
            </Marker>
        ))}
        </MapView>
          
      </View>
    )

  }
  const UnhappyCustomerTab = () => {

    const CustomMarker = () => (
      <View style={[Styles.marker, ]}>
        <Image source={require('../../assets/Images/unhappy.png')} style={Styles.markerImage} />
      </View>
    );
    return (
      <View style={Styles.SelectManagerStyle}>
        <MapView
          style={{ height: '100%', width: '100%' }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {customerLocations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.name}
            // image={require('../../assets/Images/unhappy.png')}
          >
            <CustomMarker/>
            <Callout tooltip>
              <View style={Styles.calloutView}>
                <View style={Styles.calloutBubble}>
                  <Text style={Styles.calloutText}>{location.name}</Text>
                </View>
               
              </View>
            </Callout>
            </Marker>
        ))}
      </MapView>
      </View>
    )

  }
  const EventProgressTab = () => {
    const CustomMarker = () => (
      <View style={[Styles.marker, ]}>
        <Image source={require('../../assets/Images/unhappy.png')} style={Styles.markerImage} />
      </View>
    );
    return (
      <View style={Styles.SelectManagerStyle}>
         <View style={Styles.dropDownMainView}>
          <DropDownButton Title={'01/22/2024 Monday Morning Freezing Rain'} navigation={navigation} type='storm' />
          <DropDownButton Title={'01/22/2024'} navigation={navigation} type='event' />
          </View>
        <MapView
          style={{ height: '100%', width: '100%' }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
           {EventLocations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.name}
            // image={require('../../assets/Images/unhappy.png')}
          >
            <CustomMarker/>
            <Callout tooltip>
              <View style={Styles.calloutView}>
                <View style={Styles.calloutBubble}>
                  <Text style={Styles.calloutText}>Job Number: {location.jobNo}</Text>
                  <Text style={Styles.calloutText}>Customer: {location.name}</Text>
                  <Text style={Styles.calloutText}>Job Location: {location.location}</Text>
                </View>
               
              </View>
            </Callout>
            </Marker>
        ))}</MapView>
      </View>
    )

  }

  const routes = [
    { key: 'first', title: 'Unhappy Customer', component: UnhappyCustomerTab },
    { key: 'second', title: 'Weakest Drivers', component: WeakestDriverTab },
    { key: 'third', title: 'Event Progress', component: EventProgressTab },
  ];

  return (
    <CustomTopTabView routes={routes} />
  )
}

