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
  return (
    <SafeAreaView style={tw`flex-1`} edges={["left", "top", "right"]}>
      <View style={[tw`flex-row justify-between items-center border-b-2 border-gray-200`, { backgroundColor: "#949494" }]}>
        <View style={style.cardShadow}>
          <Image
            style={tw`rounded-full h-12 w-12 my-2 ml-2 border-2 border-white`}
            source={{ uri: profilePic }}
          />
        </View>
        <Text style={[tw`text-xl font-bold`, { color: "white" }, style.cardShadow]}>{username}</Text>
        <TouchableOpacity style={tw`mr-2 relative`}>
          <Entypo name="bell" size={30} color="white" style={[tw`p-1`, style.cardShadow]} />
          {/* <Text style={[tw`absolute right-4 top-2.5 font-semibold`, {fontSize: "8px"}]}>100</Text> */}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ProfileOption
          navigationRoute="MyAccount"
          option="My Account"
          icon="account-cog"
        />
        <ProfileOption
          navigationRoute="WurkerProfile"
          option="Wurker Profile"
          icon="briefcase-variant"
        />
        {/* <ProfileOption
          navigationRoute="favorites"
          option="Favorites Wurkers/Projects"
          icon="cards-heart"
        /> */}
        <ProfileOption
          navigationRoute="Notifications"
          option="Notifications"
          icon="bell"
        />
        <ProfileOption
          navigationRoute="BillingPayments"
          option="Billing & Payments"
          icon="cash-usd"
        />
        <ProfileOption
          navigationRoute="DisplaySettings"
          option="Display Settings"
          icon="monitor-dashboard"
        />
        <ProfileOption
          navigationRoute="LanguageCountry"
          option="Language & Country"
          icon="head-question"
        />
        <ProfileOption
          navigationRoute="HelpFeedback"
          option="Help & Feedback"
          icon="help"
        />
        <ProfileOption
          navigationRoute="AboutLegal"
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
    textShadowColor: "#4C4C4C",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 3,
    elevation: 1,
  },
});