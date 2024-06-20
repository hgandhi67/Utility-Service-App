
import { Styles } from './DropDownStyles'
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { Colors, Images } from '../../helpers';

interface Props {
  Title: string;
  navigation: any;
  type: string;
}
export const DropDownButton = ({ navigation, Title, type }: Props) => {
  return (
    <View style={Styles.DropButtomMainView}>
      <View style={Styles.DropDownView}>
        <Text style={Styles.ChangeShiftTitleText}>{type == 'storm' ? 'Storm:' : 'Event:'}</Text>
      </View>
      <TouchableOpacity style={Styles.dropdown} onPress={() => { type == 'storm' ? navigation.navigate('StormScreen') : navigation.navigate('EventScreen') }}>
        <Text style={Styles.PassInputTextStyle}>{Title}</Text>
        <Image source={Images.DropDownImg} resizeMode='contain' style={Styles.iconStyle} tintColor={Colors.greyColor} />
      </TouchableOpacity>
    </View>
  )
}

