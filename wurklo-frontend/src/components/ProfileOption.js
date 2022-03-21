import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/Login';

const ProfileOption = ({ navigationRoute, option, icon, signout }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <View style={tw`border-b-2 border-gray-200 bg-white p-2`}>
            <TouchableOpacity
                style={tw`flex-row justify-between items-center p-2`}
                onPress={signout ? () => dispatch(setUser(false)) : () => navigation.navigate("Profile")}
            >
                <MaterialCommunityIcons name={icon} size={34} color="gray" />
                <Text style={tw`text-base font-semibold text-gray-500`}>{option}</Text>
                <MaterialCommunityIcons name="chevron-right" size={34} color="gray" />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileOption