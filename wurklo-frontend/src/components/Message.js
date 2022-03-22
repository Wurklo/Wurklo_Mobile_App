import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'



const Message = () => {
    return (
        <View style={tw`flex`}>
            <View style={tw`rounded-r-xl rounded-tl-xl bg-pink-200 mr-52 ml-3 p-2`}>
                <Text style={tw`text-gray-500`}>I am a message. this is what it says.</Text>
            </View>
            <View style={tw`rounded-l-xl rounded-tr-xl bg-blue-200 ml-52 mr-3 p-2`}>
                <Text style={tw`text-gray-500`}>I am another message. This is what is says.</Text>
            </View>
        </View>
    )
}

export default Message;

const style = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        textShadowColor: "white",
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 3,
        elevation: 1,
    }
});