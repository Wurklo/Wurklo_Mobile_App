import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import numeral from 'numeral';
import { useDispatch } from 'react-redux';
import { upvoteProject, downvoteProject, setUpvote, setDownvote } from '../redux/slices/projects';

// remove profile pic when user is added
const profilePic = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg';

const ProjectPost = ({ id, title, image, description, upvote, downvote, payrate, collab, created }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isFavorite, setIsFavorite] = useState(false);

    const userId = 110;

    const handleVote = (voteType) => {
        if (voteType === "upvote") {
            dispatch(upvoteProject({ userId, downvote, upvote, id }));
            dispatch(setUpvote({ downvote, upvote, userId, id }));
        } else if (voteType === "downvote") {
            dispatch(downvoteProject({ userId, downvote, upvote, id }))
            dispatch(setDownvote({ downvote, upvote, userId, id }));
        }
    }

    const textColorTW = "text-white"
    const iconsColor = "white"

    return (
        <View style={[
            tw`flex justify-between bg-white h-96 relative`,
            styles.cardShadow,
        ]}>
            <TouchableOpacity
                onPress={() => navigation.navigate("ProjectDetails", { id, title, image, description, upvote, downvote, payrate, collab, created, profilePic })}
                activeOpacity={0.8}
            >
                <View style={tw`flex-row justify-around items-center my-2 relative z-10`}>
                    <View style={styles.cardShadow}>
                        <Image
                            style={tw`rounded-full h-16 w-16 mx-2 z-10`}
                            source={{ uri: profilePic }}
                        />
                    </View>
                    <View style={[tw`absolute top-0.5 right-0 rounded-l-full p-1.5 pr-3${collab ? ' bg-blue-500' : ' bg-yellow-500'}`, styles.cardShadow]}>
                        <Text style={collab ? tw`text-white font-semibold` : tw`font-semibold`}>{collab ? "Collab+" : "Solo"}</Text>
                    </View>
                    <View style={tw`flex w-3/4`}>
                        <Text style={[tw`font-bold ${textColorTW}`,  styles.cardShadow]}>{title}</Text>
                        <Text style={[tw`text-xs ${textColorTW}`,  styles.cardShadow]}>{moment(created).fromNow()}</Text>
                        <Text style={[tw`${textColorTW}`,  styles.cardShadow]}>{description.slice(0, 55)}...</Text>
                    </View>
                </View>
                <Image
                    style={tw`h-96 w-full absolute z-0`}
                    source={{ uri: image }}
                />
            </TouchableOpacity>
            <View>
                <View>
                    <Text style={[tw`text-2xl font-bold text-center p-1 ${textColorTW}`, styles.cardShadow]}>
                        {numeral(payrate).format('0.0a')} WURK
                    </Text>
                </View>
                <View style={tw`flex-row justify-between mb-1 mx-4`}>
                    <View style={tw`relative`}>
                        <Entypo onPress={() => handleVote("upvote")} name="thumbs-up" size={30} color={upvote.indexOf(userId) === -1 ? `${iconsColor}` : "lightgreen"} style={styles.cardShadow}/>
                        <Text style={[tw`absolute -top-1 -left-2 text-xs text-green-300 font-bold`, styles.cardShadow]}>{numeral(upvote.length).format('0a')}</Text>
                    </View>
                    <View style={[tw`relative`, styles.cardShadow]}>
                        <Entypo onPress={() => handleVote("downvote")} name="thumbs-down" size={30} color={downvote.indexOf(userId) === -1 ? `${iconsColor}` : "#ff4c4c"} style={styles.cardShadow}/>
                        <Text style={[tw`absolute -bottom-1 -right-2 text-xs text-red-500 font-bold`, styles.cardShadow]}>{numeral(downvote.length).format('0a')}</Text>
                    </View>
                    <Entypo onPress={() => setIsFavorite(!isFavorite)} name="heart" size={30} color={isFavorite ? "violet" : `${iconsColor}`} style={styles.cardShadow} />
                    <Entypo name="message" size={30} color={iconsColor} style={styles.cardShadow} />
                    <MaterialCommunityIcons name="share" size={30} color={iconsColor} style={styles.cardShadow} />
                </View>
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
        textShadowColor: "#4C4C4C",
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 3,
        elevation: 1,
    },
});