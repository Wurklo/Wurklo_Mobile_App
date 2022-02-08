
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import ProjectPost from '../components/ProjectPost';
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';

import { useDispatch, useSelector } from 'react-redux';
import { setBye, setHello } from '../redux/slices/greeting';

const HomeScreen = () => {
    const [projects, setProjects] = useState();
    //redux
    const { greeting } = useSelector((state) => state.greeting)
    const dispatch = useDispatch();
    dispatch(setBye())

    console.log("Greeting: ", greeting)
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
            <FlatList
                data={projects?.data}
                keyExtractor={(item) => item._id}
                renderItem={({ item: project }) =>
                    <ProjectPost
                        id={project._id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        upvote={project.upvote}
                        downvote={project.downvote}
                        payrate={project.pay_rate}
                        collab={project.collab}
                        created={project.created}
                    />
                }

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