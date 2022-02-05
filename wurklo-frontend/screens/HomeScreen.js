
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import ProjectPost from '../components/ProjectPost';
import React, { useState, useEffect } from 'react';
import axios from '../axios';

const HomeScreen = () => {
    const [projects, setProjects] = useState();

    // get projects and store them in projects useState
    useEffect(() => {
        axios.get('/api/v1/works').then((response) => {
            if (response.data.data.length > 0) {
                setProjects(response.data);
            } else {
                console.log(response.data)
            }
        });
    }, [])

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <ProjectPost 
                projects={projects}    
            />
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