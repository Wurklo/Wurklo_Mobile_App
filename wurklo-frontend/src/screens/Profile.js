import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/Login';
import ProfileOption from '../components/ProfileOption';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const username = "Bobby Keel"
// remove profile pic when user is added
const profilePic = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg';

const Profile = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`flex-1`} edges={["left", "top", "right"]}>
      <View style={tw`flex-row justify-between items-center border-b-2 border-gray-200 bg-white`}>
        <Image
          style={tw`rounded-full h-12 w-12 my-2 ml-2`}
          source={{ uri: profilePic }}
        />
        <Text style={[tw`text-xl font-bold mr-4`, { color: "#949494" }]}>{username}</Text>
        <TouchableOpacity style={tw`mr-2`}>
          <Entypo name="bell" size={30} color="#949494" />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => dispatch(setUser(false))}
          style={[tw`bg-blue-500 rounded-full mr-1`, style.cardShadow]}
        >
          <Text style={tw`p-1 px-2 font-semibold text-lg text-white text-center`}>Logout</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView>
        <ProfileOption
          navigationRoute="myAccount"
          option="My Account"
          icon="account-cog"
        />
        <ProfileOption
          navigationRoute="wurkerProfile"
          option="Wurker Profile"
          icon="briefcase-variant"
        />
        <ProfileOption
          navigationRoute="favorites"
          option="Favorites Wurkers/Projects"
          icon="cards-heart"
        />
        <ProfileOption
          navigationRoute="notifications"
          option="Notifications"
          icon="bell"
        />
        <ProfileOption
          navigationRoute="billingPayments"
          option="Billing & Payments"
          icon="cash-usd"
        />
        <ProfileOption
          navigationRoute="displaySettings"
          option="Display Settings"
          icon="monitor-dashboard"
        />
        <ProfileOption
          navigationRoute="languageCountry"
          option="Language & Country"
          icon="head-question"
        />
        <ProfileOption
          navigationRoute="helpFeedback"
          option="Help & Feedback"
          icon="help"
        />
        <ProfileOption
          navigationRoute="aboutLegal"
          option="About & Legal"
          icon="book-open-variant"
        />
        <ProfileOption
          signout={true}
          option="Sign Out"
          icon="logout"
        />
      </ScrollView>
    </SafeAreaView>
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