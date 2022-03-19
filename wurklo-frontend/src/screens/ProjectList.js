import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ProjectPost from '../components/ProjectPost';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../redux/slices/projects';
import tw from 'tailwind-react-native-classnames';

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
            <View style={tw`flex-row justify-between items-center bg-white border-2 border-gray-200`}>
                <TextInput
                    style={tw`p-4 w-5/6`}
                    placeholder='Search projects... ex. electric cars'
                />
                <TouchableOpacity
                    style={tw`rounded-full`}
                >
                    {/* <Text style={tw`p-5 bg-gray-500 text-white`}>Send</Text> */}
                    <MaterialIcons style={tw`p-2 bg-white text-gray-500`} name="search" size={30} color="black" />
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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });