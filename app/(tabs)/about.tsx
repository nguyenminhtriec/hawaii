
import {View, StyleSheet, Text, FlatList, Image, } from 'react-native';
import { useState } from 'react';

import { WebDatePicker, NativeDatePicker } from '@/components/MyDatePicker';
import { Platform } from 'react-native';
import { Link } from 'expo-router';

type MarsPhoto = {'id': string, 'img_src': string};

export default function MarsPhotos() {

    const [earthDate, setEarthDate] = useState<string>("");
    const [photos, setPhotos] = useState<MarsPhoto[]>([]);
    const [show, setShow] = useState(true);
    
    console.log("Earth date:", earthDate);
    const fetchPhotos = async () => {       
        const response = await fetch("/mars/mars", {  
            cache: 'force-cache',         
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({earthDate})
        });    
        const data = await response.json();
        const photos: MarsPhoto[] = data.photos as MarsPhoto[];
        setPhotos(photos);      
    };
   
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center', gap: 16}}>
            { Platform.OS === 'web' ?
                <WebDatePicker 
                    onChange={(e) => setEarthDate(e.target.value)}
                    handleSearch={() => fetchPhotos()}
                    photoCount={photos.length} /> 
                : 
                <NativeDatePicker 
                   
                    isoStringDate={earthDate.split("T")[0]}
                    showCalendar={() => setShow(true)}
                    onChange={(_: any, seclectedDate?: Date) =>{
                        if (seclectedDate) {
                            setEarthDate(seclectedDate.toISOString());
                            setShow(false);
                        }
                    }}
                    handleSearch={fetchPhotos}
                    isShowingCalendar={show} 
                    photoCount={photos.length}                 
                />                  
            }
            <FlatList numColumns={4} style={{flex: 1, flexDirection:'column'}}
                data={photos}
                keyExtractor={(photo) => photo.id}
                renderItem= {({item}) => (
                    <View style={{backgroundColor: 'lightblue', padding: 4}}>
                        <Text style={{top: 0, left: 0, zIndex: 100}}>{item.id}</Text>                       
                        <Link push href={{
                                pathname:'/mars/[id]', 
                                params: {id: item.id, img_src: item.img_src}
                            }}>
                            <Image source={{uri:item.img_src}} style={{width:100, height: 100, }} resizeMode='contain' />
                        </Link>
                    </View>
                )}
            >
            </FlatList>            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
