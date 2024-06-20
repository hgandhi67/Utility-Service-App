import {View, TextInput, TouchableOpacity, Image, Keyboard, Platform, ImageSourcePropType, GestureResponderEvent} from "react-native";
import {  widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../helpers";
import {Styles} from "../TextInputButton/TextInputStyles";

interface Props  {
    placeholder : string,
    value : string ;
    onchangeText : (text: string) => void;
    inputType : string, 
    OnPress: (item: GestureResponderEvent) => void,
    
}


 export const InputButton = ( { placeholder ,value, onchangeText,    inputType, OnPress } : Props)=>{
  
    return(
      <View style={[Styles.InputBtnView, { alignItems : 'center', width :  inputType == 'text'  || inputType =='password' ? wp('84%'): wp('86%') , height :  inputType == 'text' || inputType =='password' ? hp('6%')  :  hp('15%')  }]}>
        <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.white}
            style={Styles.PassInputTextStyle}
            onChangeText={onchangeText}
            secureTextEntry={inputType =='password' ? true : false}
            multiline={inputType =='multiline' || inputType =='modal' || inputType =='project' ? true : false}
            defaultValue={value}
            numberOfLines={inputType =='multiline' || inputType =='modal' ? 3 : inputType =='project' ? 4 : 1}
            textAlignVertical={inputType =='multiline' || inputType == 'project' || inputType =='modal' ? 'top' : 'auto'}
            editable={true}
            blurOnSubmit={true}
            onSubmitEditing={()=>Keyboard.dismiss()}
         
          />
         
      
      </View>
       
    )
   
}

