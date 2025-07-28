
import {View, Text} from 'react-native';
import { useLocalSearchParams, usePathname} from 'expo-router';

export default function UserInfo() {
    const params = useLocalSearchParams();
    const pathname = usePathname();
    console.log("Params now: ", params);
    console.log("Pathname now ", pathname);
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>User ID: {params.id}</Text>
            <Text>Pathname: {pathname}</Text>
            <Text>Query 1: {params.query1}</Text>
            <Text>Query 2: {params.query2}</Text> 
        </View>
    )
}