import { DimensionValue, Text, TouchableOpacity} from "react-native";
import {  Colors } from "../../helpers";
import { Styles } from "./CustomButtonStyles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Props  {
    type : string,
    title : string,
    onPress : (item : any )=>void,
}

export const Buttons = ( {title, onPress ,  type } : Props)=>{
    return(
            <TouchableOpacity onPress={onPress} style={[Styles.ButtonStyle,
                {  backgroundColor : type == 'login' ? Colors.white  : type == 'done' ? Colors.primaryColor : Colors.white, 
                    width : type =='done' ? wp('100%') : type=='login' ? wp('84%')  : wp('100%'),
                    padding: type == 'done' ? hp('2.5%') : hp('1.5%') ,
                    borderRadius : type=='login' ? hp('0.5%') : 0
                }]}
                >
                <Text style={[Styles.ButtonText, 
                    {color :  type == 'done' ?   
                    Colors.white : type == 'login' ? Colors.primaryColor :   Colors.white,  fontSize :  hp('2%') }]}>{title}</Text>
            </TouchableOpacity>
    )
   
}

