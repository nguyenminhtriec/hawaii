
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
    <Tabs 
        screenOptions={{
        tabBarActiveTintColor: '#3aa33d',
        headerStyle: {
            backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#aff',
        tabBarStyle: {
            backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                ),
            }} 
        />
      <Tabs.Screen
            name="login"
            options={{
                title: "Login",
                tabBarIcon: ({color}) => (<Ionicons name='log-in'  size={24} color={color}/>),               
            }}   
      />
      <Tabs.Screen 
            name="settings"
            options={{
                title: 'Settings',
                tabBarIcon: ({color}) => <Ionicons name='settings' size={24} color={color} />
            }}
      />
      <Tabs.Screen 
            name="search" 
            options={{
                title:'Search',
                tabBarIcon: ({color}) => <Ionicons name='search' size={24} color={color} />
            }}
      />  
      <Tabs.Screen 
            name="about" 
            options={{ 
                title: 'About',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
                ),
            }}            
        />
    </Tabs>
)
}
