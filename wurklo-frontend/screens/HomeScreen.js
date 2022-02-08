
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import ProjectPost from '../components/ProjectPost';
import React, { useState, useEffect } from 'react';
import axios from '../redux/axios';
import { SafeAreaView } from 'react-native-safe-area-context';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setBye, setHello } from '../redux/slices/projects';

const HomeScreen = () => {
    const [projects, setProjects] = useState();
    //redux
    const { project } = useSelector((state) => state.project)
    const dispatch = useDispatch();


    console.log("Project: ", project)
    // get projects and store them in projects useState
    useEffect(() => {
        axios.get('/api/v1/works').then((response) => {
            if (response.data.data.length > 0) {
                setProjects(response.data);
            } else {
                console.log(response.data)
            }
        });
        dispatch(setHello(6))
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