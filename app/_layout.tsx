import { Stack } from 'expo-router';
import {StatusBar} from 'expo-status-bar';


export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false, title: 'Dashboard'}} />
      </Stack>
      <StatusBar style='light' />
    </>    
  );
}
