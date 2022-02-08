
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import ProjectPost from '../components/ProjectPost';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//redux
import { useDispatch, useSelector } from 'react-redux';
// import { setBye, setHello } from '../redux/slices/projects';

const HomeScreen = () => {
    //redux
    const { projects } = useSelector((state) => state.projects)
    // const dispatch = useDispatch();

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <FlatList
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