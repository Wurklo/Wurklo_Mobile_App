import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { AirbnbRating } from 'react-native-elements';
import { useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import { setUpvote, setDownvote } from '../redux/slices/wurkers';

const WurkerDetails = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const { id } = route.params;

    // workaround for params not updating when redux state dipatches handlevote
    const { wurkers } = useSelector((state) => state.wurkers);
    const index = wurkers.findIndex((obj) => obj._id === id);
    const { image, name, skill, rating, description, pay_rate, upvote, downvote } = wurkers[index];

    const userId = 110;// temporary userId until connecting userprofile

    const handleVote = (voteType) => {
        if (voteType === "upvote") {
            dispatch(setUpvote({ downvote, upvote, userId, id }))
        } else if (voteType === "downvote") {
            dispatch(setDownvote({ downvote, upvote, userId, id }))
        }
    }

    return (
        <ScrollView style={tw`flex bg-white`}>
            <View style={tw`justify-center items-center p-2 bg-white`}>
                <Image
                    style={tw`rounded-full h-48 w-64`}
                    source={{ uri: image }}
                />
                <Text style={tw`font-bold text-2xl my-2`}>{name}</Text>
                <Text>{skill}</Text>
                <AirbnbRating
                    size={25}
                    defaultRating={rating}
                    isDisabled={true}
                    showRating={false}
                    starContainerStyle={tw`mt-2`}
                />
                <Text style={tw`text-2xl font-bold text-center p-2`}>
                    {numeral(pay_rate).format('0.0a')} WURK
                </Text>
                <Text style={tw`mb-3 mx-2 text-center text-base`}>{description}</Text>
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
        </ScrollView>
    );
};

export default WurkerDetails;