import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import ProjectPost from '../components/ProjectPost';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

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