import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/Login';

const LoginModal = () => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();

    console.log(user)
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text>I am login modal</Text>
            <TouchableOpacity
            onPress={() => dispatch(setUser(true))}
            style={[tw`bg-yellow-600 rounded-full mb-2`, styles.cardShadow]}
          >
              <Text style={tw`p-2 px-3`}>Login</Text>
          </TouchableOpacity>
        </View>
    );
};

export default LoginModal;

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