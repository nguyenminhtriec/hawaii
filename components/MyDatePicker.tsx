import {View, Text, Pressable, StyleSheet} from'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';

type WebDatePickerProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSearch: () => void,
    photoCount: number | undefined,
}

export function WebDatePicker({onChange, handleSearch, photoCount}: WebDatePickerProps) {    
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop: 4, gap: 16}}>        
            <input 
                type="date" 
                onChange={onChange}       
            />
            <Pressable onPress={handleSearch} >
                <Text style={{backgroundColor:'#6688ff', padding: 4, textAlignVertical: 'center', borderRadius: 4, fontSize: 14, color: 'white'}}>Show Mars</Text>
            </Pressable>       
            <Text>#{photoCount ? photoCount : 'No photos'}</Text> 
        </View>
    )
}

type NativeDatePickerProps = {
    isoStringDate: string,
    photoCount: number |undefined,   
    onChange: (e: DateTimePickerEvent , seclectedDate?: Date) => void,
    handleSearch: () => void,
    showCalendar: () => void,  
    isShowingCalendar: boolean,   
}

export function NativeDatePicker({ isoStringDate, photoCount, showCalendar, onChange, handleSearch, isShowingCalendar }: NativeDatePickerProps) {
    return (
        <View style={styles.container}>           
            <View style={styles.calendar}>
                <Text style={{}} >{isoStringDate}</Text>
                <Ionicons name='calendar' size={24} color='teal' onPress={showCalendar} />
            </View>               
            { isShowingCalendar && (
                <DateTimePicker 
                    value={new Date("2019-9-9")}
                    mode='date'
                    display='calendar'
                    onChange={onChange}
                />)
            }
            <Pressable onPress={handleSearch} >
                <Text style={styles.text}>Show Mars</Text>
            </Pressable>  
            <Text >#{photoCount ? photoCount : "No photo" }</Text>              
        </View>
    )   
}

const styles = StyleSheet.create( {
    container: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
        padding: 4, 
        gap: 16,
        backgroundColor: '#8dd',
        borderRadius: 8

    },
    calendar: {
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: '#aaa',
        borderWidth: 1,
        padding: 4,
        gap: 16
    },
    text: {
        backgroundColor:'#068', 
        padding: 4, 
        textAlignVertical: 'center', 
        borderRadius: 4, fontSize: 14, 
        color: '#dfdfdf'
    }
})