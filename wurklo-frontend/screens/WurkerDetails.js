import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { AirbnbRating } from 'react-native-elements';
import { useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

const WurkerDetails = () => {
    const route = useRoute();

    console.log('params: ', route.params)

    return (
        <ScrollView style={tw`flex bg-white`}>
            <SafeAreaView style={tw`justify-center items-center p-2 bg-white`}>
                <Image
                    style={tw`rounded-full h-48 w-64`}
                    source={{ uri: route.params.image }}
                />
                <Text style={tw`font-bold text-2xl my-2`}>{route.params.name}</Text>
                <Text>{route.params.skill}</Text>
                <AirbnbRating
                    size={25}
                    defaultRating={route.params.rating}
                    isDisabled={true}
                    showRating={false}
                    starContainerStyle={tw`mt-2`}
                />
                <Text style={tw`my-3 mx-2 text-center text-base`}>{route.params.description}</Text>
                <TouchableOpacity style={tw`bg-blue-500 px-3 py-2 rounded-full my-2 mb-5`}>
                    <Text style={tw`px-2 text-white font-semibold text-2xl`}>
                        Contact
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};

export default WurkerDetails;