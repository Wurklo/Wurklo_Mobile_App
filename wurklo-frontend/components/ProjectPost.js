import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import axios from '../axios';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import numeral from 'numeral';

const profilePic = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg';

const ProjectPost = ({ id, title, image, description, upvote, downvote, payrate, collab, created }) => {
    const navigation = useNavigation();
    const [isUpvote, setIsUpvote] = useState(false);
    const [isDownvote, setIsDownvote] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    // handle voting
    const handleVote = (voteType) => {
        if (voteType === "upvote" && isDownvote === false) {
            axios.put(`/api/v1/works/${id}`, { upvote: upvote + 1 })
        } else if (voteType === "upvote" && isDownvote === true) {
            setIsDownvote(false);
            axios.put(`/api/v1/works/${id}`, {
                upvote: upvote + 1,
                downvote: downvote - 1,
            })
        } else if (voteType === "downvote" && isUpvote === false) {
            axios.put(`/api/v1/works/${id}`, { downvote: downvote + 1 })
        } else if (voteType === "downvote" && isUpvote === true) {
            setIsUpvote(false);
            axios.put(`/api/v1/works/${id}`, {
                upvote: upvote - 1,
                downvote: downvote + 1,
            })

        } else {
            console.log("You picked a bad function")
        }
    }

    const subtractOne = (voteType) => {
        if (voteType === "upvote") {
            axios.put(`/api/v1/works/${id}`, { upvote: upvote - 1 })
        } else {
            axios.put(`/api/v1/works/${id}`, { downvote: downvote - 1 })
        }
    }

    return (
        <View style={[
            tw`flex bg-white mb-1`,
            styles.cardShadow,
        ]}>
            <TouchableOpacity
                onPress={() => navigation.navigate("ProjectDetails", {id, title, image, description, upvote, downvote, payrate, collab, created, profilePic})}
            >
                <View style={tw`flex-row justify-around items-center my-2 relative`}>
                    <Image
                        style={tw`rounded-full h-16 w-16 mx-2`}
                        source={{ uri: profilePic }}
                    />
                    <View style={tw`absolute top-0.5 right-2 rounded-full p-1${collab ? ' bg-blue-500' : ' bg-yellow-500'}`}>
                        <Text style={collab ? tw`text-white` : ""}>{collab ? "Collab+" : "Solo"}</Text>
                    </View>
                    <View style={tw`flex w-3/4`}>
                        <Text style={tw`font-bold`}>{title}</Text>
                        <Text style={tw`text-xs`}>{moment(created).fromNow()}</Text>
                        <Text style={tw``}>{description.slice(0, 55)}...</Text>
                    </View>
                </View>
                <Image
                    style={tw`h-52 w-full`}
                    source={{ uri: image }}
                />
            </TouchableOpacity>
            <View>
                <Text style={tw`text-2xl font-bold text-center p-1`}>
                    {numeral(payrate).format('0.0a')} WURK
                </Text>
            </View>
            <View style={tw`flex-row justify-between mb-1 mx-4`}>
                <View style={tw`relative`}>
                    <Entypo onPress={() => isUpvote ? setIsUpvote(false) & subtractOne("upvote") : setIsUpvote(true) & handleVote("upvote") & setIsDownvote(false)} name="thumbs-up" size={30} color={isUpvote ? "lightgreen" : "lightgray"} />
                    <Text style={tw`absolute -top-1 -left-2 text-xs text-green-600`}>{numeral(upvote).format('0a')}</Text>
                </View>
                <View style={tw`relative`}>
                    <Entypo onPress={() => isDownvote ? setIsDownvote(false) & subtractOne("downvote") : setIsDownvote(true) & handleVote("downvote") & setIsUpvote(false)} name="thumbs-down" size={30} color={isDownvote ? "pink" : "lightgray"} />
                    <Text style={tw`absolute -bottom-1 -right-2 text-xs text-red-600`}>{numeral(downvote).format('0a')}</Text>
                </View>
                <Entypo onPress={() => setIsFavorite(!isFavorite)} name="heart" size={30} color={isFavorite ? "violet" : "lightgray"} />
                <Entypo name="message" size={30} color="skyblue" />
                <MaterialCommunityIcons name="share" size={30} color="orange" />
            </View>
        </View>
    );
};

export default ProjectPost;

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