import { View, Text, SafeAreaView, Image, FlatList,ListRenderItemInfo , TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { MainHeader , Buttons} from '../../component'
import { Images , Colors} from '../../helpers'
import { Styles } from './SelectAreaManagerStyles'
import { SelectAreaManagerData } from '../../Json'

type Item = {
    id: number;
    name: string;
    isSelected : boolean;
  };
export const SelectAreaManagerScreen = () => {

    const [isSelected , setIsSelected] = useState<boolean>(false)

    const onPressDoneBtn = ()=>{

    }
    const renderItems = ({ item }: ListRenderItemInfo<Item>) => {
        // console.log("item is ----->", item)
          return (
            <TouchableOpacity onPress={()=>{}}>
              <View style={Styles.FlatListItemView}>
               <Text style={Styles.ManagerNameStyle}>{item.name}</Text>
               {item.isSelected && (
                <Image source={Images.isSelected} resizeMode='contain' style={Styles.ImageStyle} tintColor={Colors.greenColor} />
               )

               }
               </View>
               
            </TouchableOpacity>
          )
        }
    return (
        <SafeAreaView style={Styles.Main}>
                <MainHeader title='Select Area Manager' onPress={() => { }} type="back" />
                <View style={Styles.Container}>
                <View style={{}}>
            <FlatList
              data={SelectAreaManagerData}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
              keyExtractor={(item) => item.id.toString()}

            />
          </View>
          <View>
            <Buttons
            title='Done'
            type='done'
            onPress={onPressDoneBtn}
            />
          </View>
            </View>
        </SafeAreaView>
    )
}

