import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AirbnbRating } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import numeral from 'numeral'; 
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { upvoteWurker, downvoteWurker, setUpvote, setDownvote } from '../redux/slices/wurkers';

const WurkerPost = ({ id, image, name, skill, rating, description, payrate, upvote, downvote }) => {
    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    const userId = 110;
    const handleVote = (voteType) => {
        if (voteType === "upvote") {
            dispatch(upvoteWurker({ userId, downvote, upvote, id }));
            dispatch(setUpvote({downvote, upvote, userId, id}))
        } else if (voteType === "downvote") {
            dispatch(downvoteWurker({ userId, downvote, upvote, id }))
            dispatch(setDownvote({downvote, upvote, userId, id}))
        }
    }

    rating = rating.reduce((x, y) => (x + y), 0)/rating.length

    return (
        <View style={[
            tw`flex bg-white mb-1`,
            styles.cardShadow,
        ]}>
            <TouchableOpacity
                onPress={() => navigation.navigate("WurkerDetails", { id, image, name, skill, rating, description })}
                style={tw`flex justify-center items-center p-2 bg-white -mb-1`}
                activeOpacity={0.8}
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
            <View>
                <Text style={tw`text-2xl font-bold text-center p-1`}>
                    {numeral(payrate).format('0.0a')} WURK
                </Text>
            </View>
            <View style={tw`flex-row justify-between mb-2 mx-4`}>
                <View style={tw`relative`}>
                    <Entypo onPress={() => handleVote("upvote")} name="thumbs-up" size={30} color={upvote.indexOf(userId) === -1 ? "lightgray" : "lightgreen"} />
                    <Text style={tw`absolute -top-1 -left-2 text-xs text-green-600`}>{numeral(upvote.length).format('0a')}</Text>
                </View>
                <View style={tw`relative`}>
                    <Entypo onPress={() => handleVote("downvote")} name="thumbs-down" size={30} color={downvote.indexOf(userId) === -1 ? "lightgray" : "pink"} />
                    <Text style={tw`absolute -bottom-1 -right-2 text-xs text-red-600`}>{numeral(downvote.length).format('0a')}</Text>
                </View>
                <Entypo onPress={() => setIsFavorite(!isFavorite)} name="heart" size={30} color={isFavorite ? "violet" : "lightgray"} />
                <Entypo name="message" size={30} color="skyblue" />
                <MaterialCommunityIcons name="share" size={30} color="orange" />
            </View>
        </View>
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