import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'



const Message = () => {
    return (
        <View style={tw`flex`}>
            <View style={tw`items-start`}>
                <Text style={tw`bg-pink-200 m-2 p-2`}>I am a message</Text>
            </View>
            <View style={tw`items-end`}>
                <Text style={tw`rounded bg-blue-200 m-2 p-2`}>I am another message</Text>
            </View>
        </View>
    )
}

export default Message