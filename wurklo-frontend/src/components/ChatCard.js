import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const ChatCard = ({ name, lastMessage, profilePic }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Chat', {})}
            style={tw`flex-row bg-white border-b border-gray-300 py-2`}
            activeOpacity={0.5}
        >
            <Image
                style={tw`rounded-full h-12 w-12 mx-2 border-2 border-gray-500`}
                source={{ uri: profilePic }}
            />
            <View style={tw`justify-start items-start`}>
                <Text style={tw`font-bold text-gray-500`}>{name}</Text>
                <Text style={tw`mr-14 text-gray-500`}>{lastMessage.slice(0, 55)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatCard;