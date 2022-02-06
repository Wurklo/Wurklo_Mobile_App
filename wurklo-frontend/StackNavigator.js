import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProjectDetails from './screens/ProjectDetails';
import WurkerDetails from './screens/WurkerDetails';
import WurkerList from './screens/WurkerList';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal"
            }}
        >
            <Stack.Group>
                <Stack.Screen name="WurkerList" component={WurkerList} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
                <Stack.Screen name="WurkerDetails" component={WurkerDetails} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;
