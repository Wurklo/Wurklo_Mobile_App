import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AirbnbRating } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const WurkerPost = ({id, image, name, skill, rating, description}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("WurkerDetails", {id, image, name, skill, rating, description})}
            style={
                [tw`flex justify-center items-center p-2 bg-white mb-1`,
                styles.cardShadow,
                ]}
            >
            <Image
                style={tw`rounded-full h-44 w-64`}
                source={{ uri: image }}
            />
            <Text style={tw`font-bold text-2xl`}>{name}</Text>
            <Text>{skill}</Text>
            <AirbnbRating
                size={25}
                defaultRating={rating}
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