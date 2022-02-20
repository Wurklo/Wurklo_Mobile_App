import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Message from '../components/Message'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chat = () => {
    return (
        <SafeAreaView style={tw`flex-1`}>
            <ScrollView>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />

            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={40}
            >
                <View style={tw`flex-row justify-between items-center`}>
                    <TextInput
                        style={tw`p-4 w-3/4`}
                        placeholder='Send a message ...'
                    />
                    <TouchableOpacity 
                        style={tw` rounded-full`}
                    >
                        {/* <Text style={tw`p-5 bg-gray-500 text-white`}>Send</Text> */}
                        <MaterialIcons style={tw`p-3 bg-gray-500 text-white`} name="send" size={36} color="black" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default Chat