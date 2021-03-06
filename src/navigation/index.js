import React ,{useState}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator backBehavior='history'
    
      initialRouteName="HomeStack"
      screenOptions={{
        animation: 'slide_from_right',
        tabBarActiveTintColor: '#6200EE',
        activeBackgroundColor: '#d0b0ff',
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused,color }) => (
            <MaterialCommunityIcons name="home" focused={focused} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="bookmark" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          headerShown: false,
          title: "My books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };

  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: "",
          headerShadowVisible:false,
          headerStyle:{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            backgroundColor:"#fff",
            shadowOffset:0,
          
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => alert("Drawer")}
              style={{ marginLeft: -3 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={24}
              onPress={() => alert("Search")}
              style={{ marginRight: 16 }}
            />
          ),
          
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          title:" ",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() =>navigation.goBack()}
              style={{ marginLeft: 4 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => toggleFunction()}>
                <Text>{toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
                </Text>
            </TouchableOpacity>
        ),
          
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;