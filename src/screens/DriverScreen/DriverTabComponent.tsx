import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, ListRenderItemInfo } from 'react-native'
import { Styles } from './DriverScreenStyles';
import { Images, Colors } from '../../helpers';
import { useNavigation, } from '@react-navigation/native';
import { CustomTopTabView } from '../../component';

interface Props {
    BestDriver: any,
    WeekestDriver: any,
}
export type Item = {
    id: number;
    name: string;
    company: string
}

interface navigation {
    navigate: (screenName: string, params: object) => void;
}
export const DriverTabComponent = ({ BestDriver, WeekestDriver }: Props) => {
    const navigation: navigation = useNavigation();

   
    
   

    

    const renderItem = ({ item }: ListRenderItemInfo<Item>) => {
        return (
            <View style={Styles.FlatListItemView}>
                <View >
                    <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Driver Name</Text>
                    <Text style={Styles.ManagerNameStyle}>{item.name}</Text>
                </View>
                <View >
                    <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Driver Company Name</Text>
                    <Text style={Styles.ManagerNameStyle}>{item.company}</Text>
                </View>
            </View>
        )
    }

    const renderItems = ({ item }: ListRenderItemInfo<Item>) => {
        return (
            <View style={Styles.FlatListItemView} >
                <View >
                    <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Driver Name</Text>
                    <Text style={Styles.ManagerNameStyle}>{item.name}</Text>
                </View>
                <View >
                    <Text style={[Styles.ManagerNameStyle, { color: Colors.primaryColor }]}>Driver Company Name</Text>
                    <Text style={Styles.ManagerNameStyle}>{item.company}</Text>
                </View>
            </View>
        )
    }

    const WeakestDriverTab = () => {
        return (
            <View style={Styles.SelectManagerStyle}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={WeekestDriver}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={() => (
                        <Text style={Styles.PassInputTextStyle}>No Data Found</Text>
                    )}
                />
            </View>
        )

    }
    const BestDriverTab = () => {
        return (
            <View style={Styles.SelectManagerStyle}>
                <TouchableOpacity onPress={() => { navigation.navigate('SelectAreaManager', {}) }}>
                    <View style={Styles.SelectManagerView}>
                        <View style={Styles.ManagerView}>
                            <Text style={Styles.ManagerTextStyle}>Select Area Manager</Text>
                            <Text style={Styles.ManagerNameStyle}>Elijah</Text>
                        </View>
                        <View>
                            <Image source={Images.RightArrowImg} resizeMode='contain' style={Styles.ImageStyle} />
                        </View>
                    </View>
                </TouchableOpacity>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={BestDriver}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={() => (
                        <Text style={Styles.PassInputTextStyle}>No Data Found</Text>
                    )}
                />
            </View>
        )

    }
    const routes = [
        { key: 'first', title: 'Best Drivers', component:BestDriverTab },
        { key: 'second', title: 'Weakest Drivers', component: WeakestDriverTab},
    ];

    return (
           <CustomTopTabView routes={routes} />
    )
}

