import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import numeral from 'numeral';
import { useDispatch } from 'react-redux';
import { upvoteProject, downvoteProject } from '../redux/slices/projects';

const profilePic = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg';

const ProjectPost = ({ id, title, image, description, upvote, downvote, payrate, collab, created }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isFavorite, setIsFavorite] = useState(false);

    const userId = 110;

    const handleVote = (voteType) => {
        if (voteType === "upvote") {
            dispatch(upvoteProject({ userId, downvote, upvote, id }))
        } else if (voteType === "downvote") {
            dispatch(downvoteProject({ userId, downvote, upvote, id }))
        } else {
            console.log("You entered a bad vote")
        }
    }


    return (
        <View style={[
            tw`flex bg-white mb-1`,
            styles.cardShadow,
        ]}>
            <TouchableOpacity
                onPress={() => navigation.navigate("ProjectDetails", { id, title, image, description, upvote, downvote, payrate, collab, created, profilePic })}
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