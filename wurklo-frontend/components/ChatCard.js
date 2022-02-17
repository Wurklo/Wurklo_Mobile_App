import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const ChatCard = ({ name, lastMessage, profilePic }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate()}
            style={tw`flex-row bg-white border-b border-gray-300 py-2`}
            activeOpacity={0.5}
        >
            <Image
                style={tw`rounded-full h-12 w-12 mx-2`}
                source={{ uri: profilePic }}
            />
            <View style={tw`justify-start items-start`}>
                <Text style={tw`font-semibold`}>{name}</Text>
                <Text style={tw`mr-14`}>{lastMessage.slice(0, 55)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatCard;