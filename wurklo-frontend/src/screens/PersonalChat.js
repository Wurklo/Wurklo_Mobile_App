import { View, Text } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import ChatCard from '../components/ChatCard';

const profilePic = ['https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg','https://selftaught.blog/wp-content/uploads/2019/01/MarkZuckerberg.jpg','https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg','https://source.unsplash.com/random/300','https://source.unsplash.com/random/400'];
const lastMessage = ['Last message This ia a long message that will test the slice mechanism and will cut ', 'Hey, there!', 'Can you do my roof?', 'What is your fee for that?']
const name = ["Elon Musk", "Mark Zuckerburg", "Joshua Beckman"]

const PersonalChat = () => {
  return (
    <View style={tw``}>
      <ChatCard
        profilePic={profilePic[2]}
        lastMessage={lastMessage[0]}
        name={name[2]}
      />
      <ChatCard
        profilePic={profilePic[1]}
        lastMessage={lastMessage[1]}
        name={name[1]}
      />
      <ChatCard
        profilePic={profilePic[0]}
        lastMessage={lastMessage[2]}
        name={name[0]}
      />
    </View>
  );
};

export default PersonalChat;
