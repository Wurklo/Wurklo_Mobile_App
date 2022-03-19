import { View, Text } from 'react-native'
import React from 'react'
import ChatCard from '../components/ChatCard'

const profilePic = ['https://www.forbes.com/wheels/wp-content/uploads/2020/12/Tesla-S-hero-1200px.jpg','https://cdn.geekwire.com/wp-content/uploads/2019/01/190110-starship5.jpg','https://www.searchenginewatch.com/wp-content/uploads/2018/10/big-rock-370x229.JPG','https://source.unsplash.com/random/300','https://source.unsplash.com/random/400'];
const lastMessage = ['Last message This ia a long message that will test the slice mechanism and will cut ', 'Hey, there!', 'Can you do my roof?', 'What is your fee for that?']
const name = ['Creating a spaceship', 'Building an Electric Car', 'Finding a rock']

const GroupChat = () => {
  return (
    <View>
      <ChatCard
        profilePic={profilePic[0]}
        lastMessage={lastMessage[3]}
        name={name[0]}
      />
      <ChatCard
        profilePic={profilePic[1]}
        lastMessage={lastMessage[2]}
        name={name[1]}
      />
      <ChatCard
        profilePic={profilePic[2]}
        lastMessage={lastMessage[1]}
        name={name[2]}
      />
    </View>
  )
}

export default GroupChat