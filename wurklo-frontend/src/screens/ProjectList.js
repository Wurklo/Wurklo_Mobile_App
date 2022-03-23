import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ProjectPost from '../components/ProjectPost';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../redux/slices/projects';

const HomeScreen = () => {
    //redux
    const { projects } = useSelector((state) => state.projects)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    return (
        <SafeAreaView edges={['right', 'top', 'left']}>
            <StatusBar style="auto" />

            <View style={[tw`flex-row justify-between items-center`, { backgroundColor: "#949494" }]}>
                <TouchableOpacity
                    style={tw`rounded-full`}
                >
                    <MaterialIcons name="search" size={30} color="black" style={[tw`p-2 text-white`, style.cardShadow]} />
                </TouchableOpacity>
                <TextInput
                    clearButtonMode='while-editing'
                    style={[tw`py-2 mb-1 w-4/6 -ml-4 text-base`, style.cardShadow]}
                    placeholder='Search projects... ex. electric cars'
                    placeholderTextColor="white"
                    color="white"
                />
                <TouchableOpacity
                    style={tw`rounded-full -ml-4`}
                >
                    <MaterialCommunityIcons name="sort" size={30} color="black" style={[tw`p-2 text-white`, style.cardShadow]} />
                </TouchableOpacity>
            </View>

            <FlatList
                contentContainerStyle={tw`pb-32`}
                data={projects} // maybe add back projects?.data when pulling from server 
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

const style = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        textShadowColor: "#4C4C4C",
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 3,
        elevation: 1,
    },
});