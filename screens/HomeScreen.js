
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <View>
            <Text style={tw`text-blue-600`}>Change text for git check git push without branch name</Text>
            <StatusBar style="auto" />
        </View>
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