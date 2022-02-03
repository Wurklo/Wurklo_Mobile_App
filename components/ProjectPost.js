import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import moment from 'moment';

const DUMMY_DATA = [
    {
        projects: [
            {
                id: 0,
                title: "Building an Electric Car",
                image: "https://news.hmgjournal.com/images_n/contents/Is-It-the-Era-of-The-Electric-Car1.jpg",
                description: "I am building a fuel efficient autonomous car. This project will create cars that work with electricity only",
                upvote: 250,
                downvote: 50,
                pay_rate: 50000,
                collab: {
                    is_collab: true
                },
                created: 1620120320
            }
        ]
    }
]

const project = DUMMY_DATA[0].projects[0]

const addOne = (num, voteType) => {
    if (voteType === "upvote") {
        project.upvote = num += 1;
    } else {
        project.downvote = num += 1;
    }
}

const subtractOne = (num, voteType) => {
    if (voteType === "upvote") {
        project.upvote = num -= 1;
    } else {
        project.downvote = num -= 1;
    }
}

const ProjectPost = () => {
    const [isUpvote, setIsUpvote] = useState(false);
    const [isDownvote, setIsDownvote] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isMessaged, setIsMessaged] = useState(false);
    const [isShared, setIsShared] = useState(false);

    console.log(project.collab.is_collab)

    return (
        <View style={[
            tw`flex bg-white`,
            styles.cardShadow,
        ]}>
            <TouchableOpacity>
                <View style={tw`flex-row justify-around items-center my-2 relative`}>
                    <Image
                        style={tw`rounded-full h-16 w-16 mx-2`}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg' }}
                    />
                    <View style={tw`absolute top-0.5 right-2 rounded-full p-1${project.collab.is_collab ? ' bg-blue-500' : ' bg-yellow-500'}`}>
                        <Text style={project.collab.is_collab ? tw`text-white` : ""}>{project.collab.is_collab ? "Collab+" : "Solo"}</Text>
                    </View>
                    <View style={tw`flex w-3/4`}>
                        <Text style={tw`font-bold`}>{project.title}</Text>
                        <Text style={tw`text-xs`}>{moment(project.created).fromNow()}</Text>
                        <Text style={tw``}>{project.description.slice(0, 55)}...</Text>
                    </View>
                </View>
                <Image
                    style={tw`h-52 w-full`}
                    source={{ uri: project.image }}
                />
            </TouchableOpacity>
            <View>
                <Text style={tw`text-2xl font-bold text-center p-1`}>
                    {project.pay_rate} WURK
                </Text>
            </View>
            <View style={tw`flex-row justify-between mb-1 mx-4`}>
                <View style={tw`relative`}>
                    <Entypo onPress={() => isUpvote ? setIsUpvote(false) & subtractOne(project.upvote, "upvote") : setIsUpvote(true) & addOne(project.upvote, "upvote") & setIsDownvote(false)} name="thumbs-up" size={30} color={isUpvote ? "green" : "lightgray"} />
                    <Text style={tw`absolute -top-1 -left-2 text-xs text-green-600`}>{project.upvote}</Text>
                </View>
                <View style={tw`relative`}>
                    <Entypo onPress={() => isDownvote ? setIsDownvote(false) & subtractOne(project.downvote, "downvote") : setIsDownvote(true) & addOne(project.downvote, "downvote") & setIsUpvote(false)} name="thumbs-down" size={30} color={isDownvote ? "red" : "lightgray"} />
                    <Text style={tw`absolute -bottom-1 -right-2 text-xs text-red-600`}>{project.downvote}</Text>
                </View>
                <Entypo onPress={() => setIsFavorite(!isFavorite)} name="heart" size={30} color={isFavorite ? "violet" : "lightgray"} />
                <Entypo onPress={() => setIsMessaged(!isMessaged)} name="message" size={30} color={isMessaged ? "blue" : "lightgray"} />
                <MaterialCommunityIcons onPress={() => setIsShared(!isShared)} name="share" size={30} color={isShared ? "orange" : "lightgray"} />
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