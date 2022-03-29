import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
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
console.log(wurkers)
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
                    placeholder='Search wurkers... ex. plumber'
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