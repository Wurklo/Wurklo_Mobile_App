import { View, Text } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Profile = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>I am user profile</Text>
    </View>
  );
};

export default Profile;
