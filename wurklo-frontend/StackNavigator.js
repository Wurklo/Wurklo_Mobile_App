import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectList from './screens/ProjectList';
import ProjectDetails from './screens/ProjectDetails';
import WurkerDetails from './screens/WurkerDetails';
import WurkerList from './screens/WurkerList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Search from './components/Search';
import Post from './screens/Post';
import Messages from './screens/Messages';
import Profile from './screens/Profile';

const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// home screen for wurkers and projects with swipe function
const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName='ProjectList'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 0
                }
            }}
        >
            <Tab.Screen name="WurkerList" component={WurkerList} />
            <Tab.Screen name="ProjectList" component={ProjectList} />
        </Tab.Navigator>
    )
}

// bottom nav bar component
const HomeWurk = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 25,
                    height: 60,
                    ...style.cardShadow
                }
            }}

        >
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Search" component={Search} />
            <BottomTab.Screen name="Post" component={Post} />
            <BottomTab.Screen name="Messages" component={Messages} />
            <BottomTab.Screen name="Profile" component={Profile} />
        </BottomTab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="HomeWurk" component={HomeWurk} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
                <Stack.Screen name="WurkerDetails" component={WurkerDetails} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;

const style = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 10,
    },
});