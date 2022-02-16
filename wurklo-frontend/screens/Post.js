import { View, Text } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Post = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>I am post creator</Text>
    </View>
  );
};

export default Post;
