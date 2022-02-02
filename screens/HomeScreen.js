
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import ProjectPost from '../components/ProjectPost';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <Text style={tw`text-center text-blue-600`}>Project Post Card Component</Text>
            <ProjectPost />
        </SafeAreaView>
    );
};

export default HomeScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });