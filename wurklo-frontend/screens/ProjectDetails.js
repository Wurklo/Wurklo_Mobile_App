import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import moment from 'moment';
import { useState } from 'react';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import { upvoteProject, downvoteProject } from '../redux/slices/projects';


const ProjectDetails = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const { id, profilePic } = route.params;

    // workaround for params not updating when redux state dipatches handlevote
    const { projects } = useSelector((state) => state.projects);
    const index = projects.findIndex((obj) => obj._id === id);
    const {title, image, description, upvote, downvote, pay_rate, collab, created} = projects[index];

    const userId = 110; // temporary userId until connecting userprofile

    const handleVote = (voteType) => {
        if (voteType === "upvote") {
            dispatch(upvoteProject({ userId, downvote, upvote, id }));
        } else if (voteType === "downvote") {
            dispatch(downvoteProject({ userId, downvote, upvote, id }));
        } else {
            console.log("You entered a bad vote");
        }
    }

    return (
        <ScrollView style={[
            tw`flex bg-white mb-1 pt-3`,
            styles.cardShadow,
        ]}>
            <View>
                <View style={tw`flex-row justify-around items-center my-4 relative`}>
                    <View style={tw`flex justify-center items-center`}>
                        <Text style={tw`font-bold text-2xl`}>{title}</Text>
                        <Text style={tw``}>{moment(created).fromNow()}</Text>
                    </View>
                </View>
                <Image
                    style={tw`h-52 w-full`}
                    source={{ uri: image }}
                />
            </View>
            <View style={tw`mx-1`}>
                <Text style={tw`text-2xl font-bold text-center p-2`}>
                    {numeral(pay_rate).format('0.0a')} WURK
                </Text>
                <Text style={tw`mx-6 mb-3`}>{description}</Text>
                <View style={tw`flex-row justify-around my-4`}>
                    <Image
                        style={tw`rounded-full h-44 w-36 mb-3`}
                        source={{ uri: profilePic }}
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