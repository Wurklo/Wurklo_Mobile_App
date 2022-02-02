import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
const ProjectPost = () => {
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
                    <View style={tw`absolute top-0.5 right-2 bg-blue-500 rounded-full p-1`}>
                        <Text style={tw`text-white`}>Collab+</Text>
                    </View>
                    <View style={tw`flex w-3/4`}>
                        <Text style={tw`font-bold`}>Building an electric Car</Text>
                        <Text style={tw`text-xs`}>7 days ago</Text>
                        <Text style={tw``}>I am building a fuel efficient auto nomous car this is some project ...</Text>
                    </View>
                </View>
                <Image
                    style={tw`h-52 w-full`}
                    source={{ uri: 'https://news.hmgjournal.com/images_n/contents/Is-It-the-Era-of-The-Electric-Car1.jpg' }}
                />
            </TouchableOpacity>
            <View>
                <Text style={tw`text-2xl font-bold text-center p-1`}>
                    50k WURK
                </Text>
            </View>
            <View style={tw`flex-row justify-between mb-1 mx-4`}>
                <Entypo name="thumbs-down" size={30} color="lightgray" />
                <Entypo name="thumbs-up" size={30} color="lightgray" />
                <Entypo name="heart" size={30} color="lightgray" />
                <Entypo name="message" size={30} color="lightgray" />
                <MaterialCommunityIcons name="share" size={30} color="lightgray" />
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