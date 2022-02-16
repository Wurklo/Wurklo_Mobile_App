import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/Login';

const Profile = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <TouchableOpacity
        onPress={() => dispatch(setUser(false))}
        style={[tw`bg-blue-500 rounded-full mb-2 mx-10`, style.cardShadow]}
      >
        <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const style = StyleSheet.create({
  cardShadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 10,
  },
});