import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AirbnbRating } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const WURKERS = [
    {
        id: 0,
        name: "Joshua Beckman",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        skill: "Plumber",
        rating: 5,
    },
    {
        id: 1,
        name: "Joshua Beckman",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        skill: "Plumber",
        rating: 5,
    },
    {
        id: 2,
        name: "Joshua Beckman",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        skill: "Plumber",
        rating: 5,
    },
    {
        id: 3,
        name: "Joshua Beckman",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        skill: "Plumber",
        rating: 5,
    },
]

const WurkerPost = () => {
    return (
        <TouchableOpacity style={
            [tw`flex justify-center items-center p-2 bg-white`,
            styles.cardShadow,
            ]}>
            <Image
                style={tw`rounded-full h-44 w-64`}
                source={{ uri: WURKERS[0].image }}
            />
            <Text style={tw`font-bold text-2xl`}>{WURKERS[0].name}</Text>
            <Text>{WURKERS[0].skill}</Text>
            <AirbnbRating
                size={25}
                defaultRating={5}
                isDisabled={true}
                showRating={false} />
        </TouchableOpacity>
    );
};

export default WurkerPost;

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