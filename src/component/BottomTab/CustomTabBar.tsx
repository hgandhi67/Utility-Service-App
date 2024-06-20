import {View , Text , TouchableOpacity, Image, ImageSourcePropType, DeviceEventEmitter} from 'react-native'
import { Styles } from './BottomTabStyles';
import { Images, Colors } from '../../helpers';
import {  useSelector, useDispatch } from 'react-redux';
import  { RootState, AppDispatch } from '../../redux/store';

export function CustomTabBar({ state, descriptors, navigation }) {

  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
  const themeColors = isDarkTheme ? Colors.dark : Colors.light;
    return (
        <View style={Styles.customTabStyles}>
          {state.routes.map((route: {key : number ,  name : string}, index: number) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name
  
            const isFocused = state.index === index;
            let iconName : ImageSourcePropType;
                if (route.name === 'Storm') {
                    iconName = Images.StormImg;
                } else  {
                  iconName = Images.ThunderImg; 
                }
  
           
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
            
  
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
  
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
  
            return (
              <TouchableOpacity key={index}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={Styles.TabStyle}  
                >
                  <View style={[Styles.TabIconViewStyle , {backgroundColor: isFocused ? themeColors.selectedTab : themeColors.tabColor, width : '100%' }]}>
                    <Image source={iconName} resizeMode='contain' style={Styles.TabIconStyle} tintColor={isFocused ? Colors.white : Colors.white} />
                    <Text style={[Styles.TabTextStyle, {color:isFocused ? Colors.white : Colors.white}]}>{label}</Text>
                  </View>
                </TouchableOpacity>
            );
          })}
         
        </View>
     
    );
  }

  