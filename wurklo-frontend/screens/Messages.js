import { View, Text } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Messages = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>I am messages</Text>
    </View>
  );
};

export default Messages;
