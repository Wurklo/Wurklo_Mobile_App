import { View, Text, FlatList } from 'react-native';
import React from 'react';
import WurkerPost from '../components/WurkerPost';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

//redux
import { useDispatch, useSelector } from 'react-redux';
// import { setBye, setHello } from '../redux/slices/projects';

const WurkerList = () => {
    //redux
    const { wurkers } = useSelector((state) => state.wurkers)
    // const dispatch = useDispatch();

    return (
        <SafeAreaView edges={['right', 'top', 'left']}>
            <StatusBar style="auto" />
            <FlatList
                data={wurkers}
                keyExtractor={(item) => item.id}
                renderItem={({ item: wurker }) =>
                    <WurkerPost 
                        id={wurker.id}
                        image={wurker.image}
                        name={wurker.name}
                        skill={wurker.skill}
                        rating={wurker.rating}
                        description={wurker.description}
                    />
                }
            />

        </SafeAreaView>
    );
};

export default WurkerList;
