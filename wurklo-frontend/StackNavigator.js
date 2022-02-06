import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProjectDetails from './screens/ProjectDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;
