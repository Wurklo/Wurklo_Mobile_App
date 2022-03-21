import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import WurkerPost from '../components/WurkerPost';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getWurkers } from '../redux/slices/wurkers'

const WurkerList = () => {
    //redux
    const { wurkers } = useSelector((state) => state.wurkers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWurkers());
    }, []);
    
    return (
        <SafeAreaView edges={['right', 'top', 'left']}>
            <StatusBar style="auto" />
            <View style={tw`flex-row justify-between items-center bg-white`}>
                <TouchableOpacity
                    style={tw`rounded-full`}
                >
                    <MaterialIcons style={tw`p-2 bg-white text-gray-500`} name="search" size={30} color="black" />
                </TouchableOpacity>
                <TextInput
                    style={tw`p-4 w-3/4`}
                    placeholder='Search wurkers... ex. plumber'
                />
                <TouchableOpacity
                    style={tw`rounded-full`}
                >
                    <MaterialCommunityIcons style={tw`p-2 bg-white text-gray-500`} name="sort" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={tw`pb-32`}
                data={wurkers}
                keyExtractor={(item) => item._id}
                renderItem={({ item: wurker }) =>
                    <WurkerPost
                        id={wurker._id}
                        image={wurker.image}
                        name={wurker.name}
                        skill={wurker.skill}
                        rating={wurker.rating}
                        description={wurker.description}
                        payrate={wurker.pay_rate}
                        upvote={wurker.upvote}
                        downvote={wurker.downvote}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default WurkerList;
