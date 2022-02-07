import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProjectDetails from './screens/ProjectDetails';
import WurkerDetails from './screens/WurkerDetails';
import WurkerList from './screens/WurkerList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

// home screen for wurkers and projects with swipe function
const HomeWurk = () => {
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 0
            }
        }}
        >
            <Tab.Screen name="WurkerList" component={WurkerList} />
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Group>
                <Stack.Screen
                    name="HomeWurk"
                    component={HomeWurk}
                />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
                <Stack.Screen name="WurkerDetails" component={WurkerDetails} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;
