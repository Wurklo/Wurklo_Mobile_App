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
            dispatch(setUpvote({ downvote, upvote, userId, id }))
        } else if (voteType === "downvote") {
            dispatch(downvoteWurker({ userId, downvote, upvote, id }))
            dispatch(setDownvote({ downvote, upvote, userId, id }))
        }
    }

    const ratingAvg = rating.reduce((x, y) => (x + y), 0) / rating.length

    const textColorTW = "text-white"
    const iconsColor = "white"

    return (
        <View style={[
            tw`flex justify-between h-96 bg-white relative`,
            styles.cardShadow,
        ]}>
            <TouchableOpacity
                onPress={() => navigation.navigate("WurkerDetails", { id, image, name, skill, rating, description })}
                style={tw`justify-center items-center`}
                activeOpacity={0.8}
            >

                <View style={tw`z-10 absolute top-64 items-center`}>
                    <Text style={[tw`font-bold text-2xl text-white`, styles.cardShadow]}>{name}</Text>
                    <Text style={[tw`font-semibold text-lg text-white`, styles.cardShadow]}>{skill}</Text>
                    <Text style={[tw`text-xl font-bold text-white text-center z-10`, styles.cardShadow]}>
                        {numeral(payrate).format('0.0a')} WURK
                    </Text>
                </View>
                <View style={tw`z-10 absolute right-2 top-0 bg-green-300 pb-5 rounded-b-full`}>
                    {/* <View style={tw`z-10 mt-0.5 items-center`}>
                        <Text style={[tw`text-white font-semibold`, styles.cardShadow]}>{numeral(rating.length).format('0a')}</Text>
                    </View> */}
                    {Array(Math.round(ratingAvg)).fill().map((i) => (
                        <MaterialCommunityIcons name="shield-star" size={34} color="#FBFF19" style={[tw`p-1 -mb-4`, styles.cardShadow]} />
                    ))}
                </View>
                <Image
                    style={tw`h-96 w-full absolute top-0 left-0 z-0`}
                    source={{ uri: image }}
                />
            </TouchableOpacity>
            <View style={tw`flex-row justify-between mb-2 mx-4`}>
                <View style={tw`relative`}>
                    <Entypo onPress={() => handleVote("upvote")} name="thumbs-up" size={30} color={upvote.indexOf(userId) === -1 ? `${iconsColor}` : "lightgreen"} style={styles.cardShadow} />
                    <Text style={[tw`absolute -top-1 -left-2 text-xs text-green-300 font-bold`, styles.cardShadow]}>{numeral(upvote.length).format('0a')}</Text>
                </View>
                <View style={tw`relative`}>
                    <Entypo onPress={() => handleVote("downvote")} name="thumbs-down" size={30} color={downvote.indexOf(userId) === -1 ? `${iconsColor}` : "#ff4c4c"} style={styles.cardShadow} />
                    <Text style={[tw`absolute -bottom-1 -right-2 text-xs text-red-500 font-bold`, styles.cardShadow]}>{numeral(downvote.length).format('0a')}</Text>
                </View>
                <Entypo onPress={() => setIsFavorite(!isFavorite)} name="heart" size={30} color={isFavorite ? "violet" : `${iconsColor}`} style={styles.cardShadow} />
                <Entypo name="message" size={30} color={iconsColor} style={styles.cardShadow} />
                <MaterialCommunityIcons name="share" size={30} color={iconsColor} style={styles.cardShadow} />
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
        textShadowColor: "#4C4C4C",
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 3,
        elevation: 1,
    },
});