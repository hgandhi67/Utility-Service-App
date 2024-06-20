import { View, Text, SafeAreaView, ListRenderItemInfo, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MainHeader } from '../../component'
import { Colors, Images } from '../../helpers'
import { Styles } from './CustomerScreenStyles'
import { CustomerData } from '../../Json'
import { Customer } from '../../helpers/interface'


export const CustomerScreen = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState<number>();


    const ToggleDropDown = (id: number) => {
        setOpenIndex((prevIndex: number) => (prevIndex === id ? null : id));

    }
    const renderItems = ({ item }: ListRenderItemInfo<Customer>) => {
        // console.log("item is ----->", item)
        return (

            <View style={Styles.FlatListItemView}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} key={item.id} onPress={() => { ToggleDropDown(item.id), setSelectedIndex(item.id) }}>
                    <View >
                        <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Customer Name</Text>
                        <Text style={Styles.ManagerNameStyle}>{item.name}</Text>
                    </View>
                    <Image source={openIndex === item.id ? Images.DownArrowImg : Images.RightArrowImg} resizeMode='contain' style={Styles.ImageStyle} />

                </TouchableOpacity>
                {openIndex === item.id ?
                    <View style={Styles.DropDownItemView}>
                        <View >
                            <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Location</Text>
                            <Text style={Styles.ManagerNameStyle}>{item.location}</Text>
                        </View>
                        <View >
                            <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Supervisor Name</Text>
                            <Text style={Styles.ManagerNameStyle}>{item.supervisor}</Text>
                        </View>
                        <View >
                            <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Driver Name</Text>
                            <Text style={Styles.ManagerNameStyle}>{item.Driver}</Text>
                        </View>
                        <View >
                            <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Reason Why Unhappy</Text>
                            <Text style={Styles.ManagerNameStyle}>{item.Reason}</Text>
                        </View>
                        <View >
                            <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Account Owner Name</Text>
                            <Text style={Styles.ManagerNameStyle}>{item.acount}</Text>
                        </View>
                    </View>
                    : null}
            </View>

        )
    }

    const renderFooter = () => (
        <View style={Styles.ListFooterViewStyle}> 
         
        </View>
      );

    return (
        <SafeAreaView style={Styles.Main}>
            <MainHeader title='Customers' onPress={() => { }} type="back" />
            <View style={Styles.Container}>
                <View style={Styles.CustomerCountView}>
                    <Text style={Styles.ManagerNameStyle}>Unhappy Customers</Text>
                    <Text style={Styles.CustomerCountText}>{CustomerData.length}</Text>
                </View>
                <View style={{}}>
                    <FlatList
                        data={CustomerData}
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


