import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/Login';


const LoginModal = () => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    console.log(user)
    return (
        <ScrollView contentContainerStyle={tw`flex-1 justify-center`}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={tw`mx-5`}>
                    <TextInput
                        style={[tw`text-center text-xl p-2 px-4 mb-2 bg-gray-100 rounded-2xl`, style.cardShadow]}
                        placeholder='Username'
                    />
                    <TextInput
                        style={[tw`text-center text-xl p-2 px-4 mb-2 bg-gray-100 rounded-2xl`, style.cardShadow]}
                        placeholder='Password'
                    />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
                onPress={() => dispatch(setUser(true))}
                style={[tw`bg-yellow-600 rounded-full mb-2 mx-20`, style.cardShadow]}
            >
                <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={() => dispatch(setUser(true))}
                style={[tw`bg-gray-400 rounded-full mb-2 mx-20`, style.cardShadow]}
            >
                <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(setUser(true))}
                style={[tw`bg-red-600 rounded-full mb-2 mx-10 mt-10`, style.cardShadow]}
            >
                <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(setUser(true))}
                style={[tw`bg-black rounded-full mb-2 mx-10`, style.cardShadow]}
            >
                <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Sign in with Apple</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LoginModal;

const style = StyleSheet.create({
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