import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import axios from '../axios';
import moment from 'moment';
import { useState } from 'react';
import numeral from 'numeral';

const ProjectDetails = () => {
    const route = useRoute();
    const [isUpvote, setIsUpvote] = useState(false);
    const [isDownvote, setIsDownvote] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    console.log('params: ', route.params)
    // handle voting
    const handleVote = (voteType) => {
        if (voteType === "upvote" && isDownvote === false) {
            axios.put(`/api/v1/works/${route.params.id}`, { upvote: route.params.upvote + 1 })
        } else if (voteType === "upvote" && isDownvote === true) {
            setIsDownvote(false);
            axios.put(`/api/v1/works/${route.params.id}`, {
                upvote: route.params.upvote + 1,
                downvote: route.params.downvote - 1,
            })
        } else if (voteType === "downvote" && isUpvote === false) {
            axios.put(`/api/v1/works/${route.params.id}`, { downvote: route.params.downvote + 1 })
        } else if (voteType === "downvote" && isUpvote === true) {
            setIsUpvote(false);
            axios.put(`/api/v1/works/${route.params.id}`, {
                upvote: route.params.upvote - 1,
                downvote: route.params.downvote + 1,
            })

        } else {
            console.log("You picked a bad function")
        }
    }

    const subtractOne = (voteType) => {
        if (voteType === "upvote") {
            axios.put(`/api/v1/works/${route.params.id}`, { upvote: route.params.upvote - 1 })
        } else {
            axios.put(`/api/v1/works/${route.params.id}`, { downvote: route.params.downvote - 1 })
        }
    }

    return (
        <ScrollView style={[
            tw`flex bg-white mb-1`,
            styles.cardShadow,
        ]}>
            <View>
                <View style={tw`flex-row justify-around items-center my-4 relative`}>
                    <View style={tw`flex justify-center items-center`}>
                        <Text style={tw`font-semibold text-3xl`}>{route.params.title}</Text>
                        <Text style={tw``}>{moment(route.params.created).fromNow()}</Text>
                    </View>
                </View>
                <Image
                    style={tw`h-52 w-full`}
                    source={{ uri: route.params.image }}
                />
            </View>
            <View style={tw`mx-1`}>
                <Text style={tw`text-2xl font-bold text-center p-2`}>
                    {numeral(route.params.payrate).format('0.0a')} WURK
                </Text>
                <Text style={tw`mx-6 mb-3`}>{route.params.description}</Text>
                <View style={tw`flex-row justify-around my-4`}>
                    <Image
                        style={tw`rounded-full h-44 w-36 mb-3`}
                        source={{ uri: route.params.profilePic }}
                    />
                    <View>
                        <Text style={tw`text-xs mt-2`}>1 Full Stack Engineer | Apply</Text>
                        <Text style={tw`text-xs mt-2`}>1 Electrical Engineer | Apply</Text>
                        <Text style={tw`text-xs mt-2`}>1 3D Designer | Apply</Text>
                        <Text style={tw`text-xs mt-2`}>2 Accountant | Apply</Text>
                    </View>
                </View>
            </View>
            <View style={tw`flex-row justify-between mx-5 pb-5`}>
                <View style={tw`relative`}>
                    <Entypo onPress={() => isUpvote ? setIsUpvote(false) & subtractOne("upvote") : setIsUpvote(true) & handleVote("upvote") & setIsDownvote(false)} name="thumbs-up" size={30} color={isUpvote ? "lightgreen" : "lightgray"} />
                    <Text style={tw`absolute -top-1 -left-2 text-xs text-green-600`}>{numeral(route.params.upvote).format('0a')}</Text>
                </View>
                <View style={tw`relative`}>
                    <Entypo onPress={() => isDownvote ? setIsDownvote(false) & subtractOne("downvote") : setIsDownvote(true) & handleVote("downvote") & setIsUpvote(false)} name="thumbs-down" size={30} color={isDownvote ? "pink" : "lightgray"} />
                    <Text style={tw`absolute -bottom-1 -right-2 text-xs text-red-600`}>{numeral(route.params.downvote).format('0a')}</Text>
                </View>
                <Entypo onPress={() => setIsFavorite(!isFavorite)} name="heart" size={30} color={isFavorite ? "violet" : "lightgray"} />
                <Entypo name="message" size={30} color="skyblue" />
                <MaterialCommunityIcons name="share" size={30} color="orange" />
            </View>
        </ScrollView>
    );
};

export default ProjectDetails;

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