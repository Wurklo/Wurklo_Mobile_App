import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

const WurkerDetails = () => {
    const route = useRoute();
    console.log('params: ', route.params)
    return (
        <ScrollView>
            <SafeAreaView style={
                [tw`flex justify-center items-center p-2 bg-white`,
                styles.cardShadow,
                ]}>
                <Image
                    style={tw`rounded-full h-44 w-64`}
                    source={{ uri: route.params.WURKERS[0].image }}
                />
                <Text style={tw`font-bold text-2xl`}>{route.params.WURKERS[0].name}</Text>
                <Text>{route.params.WURKERS[0].skill}</Text>
                <AirbnbRating
                    size={25}
                    defaultRating={5}
                    isDisabled={true}
                    showRating={false}
                />
            </SafeAreaView>
        </ScrollView>
    );
};

export default WurkerDetails;

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
});