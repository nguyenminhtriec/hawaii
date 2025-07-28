
import { usePathname, useLocalSearchParams } from "expo-router";
import {View, Text, Image} from'react-native';


export default function() {
    const {id, img_src} = useLocalSearchParams();   
    const photo_src = img_src.toString();
    console.log("ID: ", id, "SRC: ", img_src);

    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text>{id}</Text>
            <Image source={{uri: photo_src, width: 300, height: 300}} style={{}} resizeMode="contain" />
        </View>         
)}