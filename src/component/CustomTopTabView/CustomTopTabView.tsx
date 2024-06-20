import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Styles } from './CustomTopTabViewStyle';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { ScreenRoute } from '../../helpers/interface';

export const CustomTopTabView = ({routes}) => {
    const [index, setIndex] = useState(0);
 
    interface Props {
        route: ScreenRoute
        focused: boolean,
        color: string
    }

    const renderLabel = ({ route, focused, color }: Props) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[Styles.tabTextStyle, focused ? Styles.activeTabTextColor : Styles.tabTextColor]}>
                    {route.title}
                </Text>
            </View>
        )
    }
    const renderScene = SceneMap(
        routes.reduce((acc, route) => {
          acc[route.key] = route.component;
          return acc;
        }, {})
      );

    return (
        <View style={Styles.tabBar} >
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            swipeEnabled={false}
            renderTabBar={props => <TabBar renderLabel={renderLabel}{...props}
                indicatorStyle={Styles.activeTabStyle}
                style={Styles.TabIndicatorStyle}
                tabStyle={{ backgroundColor: '' }}
                pressColor={'transparent'}
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            />}
            sceneContainerStyle={{ marginTop: 0, backgroundColor: '' }}
        />
    </View>
  )
}

