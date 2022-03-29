import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

let myAcctInfo = {
  name: "Joshua Beckman",
  image: "images/profile0.jpg",
  email: "joshuabeckman@gmail.com",
  DOB: 542453120,
  username: "joshuabeckman",
  password: "",
  phone_num: "8505555555",
  address: "2845 South Village RD Summertime MD 28773",
}

const profilePic = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg';

const MyAccount = () => {
  const [editing, setEditing] = useState(false);
  const navigation = useNavigation();
  const { name, image, email, DOB, username, password, phone_num, address } = myAcctInfo;
  return (
    <SafeAreaView style={tw`flex`}>
      <View style={[tw`flex-row justify-between items-center border-b-2 border-gray-200`, { backgroundColor: "#949494" }]}>
        <View style={style.cardShadow}>
          <Image
            style={tw`rounded-full h-12 w-12 my-2 ml-2 border-2 border-white`}
            source={{ uri: profilePic }}
          />
        </View>
        <Text style={[tw`text-xl font-bold`, { color: "white" }, style.cardShadow]}>My Account</Text>
        <TouchableOpacity style={tw`mr-2 relative`}>
          <Entypo name="bell" size={30} color="white" style={[tw`p-1`, style.cardShadow]} />
          {/* <Text style={[tw`absolute right-4 top-2.5 font-semibold`, {fontSize: "8px"}]}>100</Text> */}
        </TouchableOpacity>
      </View>
      <ScrollView>
        {editing ? (
          <>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`w-1/4 text-center`}>Name</Text>
              <TextInput
                style={tw`bg-white p-4 w-full border-b-2 border-gray-200 w-3/4`}
                placeholder='Enter name'
                maxLength={100}
                // onChangeText={}
                value={name}
              />
            </View>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`w-1/4 text-center`}>Image</Text>
              <TextInput
                style={tw`bg-white p-4 w-full border-b-2 border-gray-200 w-3/4`}
                placeholder='Enter image'
                maxLength={100}
                // onChangeText={}
                value={image}
              />
            </View>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`w-1/4 text-center`}>DOB</Text>
              <TextInput
                style={tw`bg-white p-4 w-full border-b-2 border-gray-200 w-3/4`}
                placeholder='Enter DOB'
                maxLength={100}
                // onChangeText={}
                value={DOB.toString()}
              />
            </View>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`w-1/4 text-center`}>Username</Text>
              <TextInput
                style={tw`bg-white p-4 w-full border-b-2 border-gray-200 w-3/4`}
                placeholder='Enter Username'
                maxLength={100}
                // onChangeText={}
                value={username}
              />
            </View>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`w-1/4 text-center`}>Password</Text>
              <TextInput
                style={tw`bg-white p-4 w-full border-b-2 border-gray-200 w-3/4`}
                placeholder='Enter New Password'
                maxLength={100}
                // onChangeText={}
                value={password}
              />
            </View>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`w-1/4 text-center`}>Phone #</Text>
              <TextInput
                style={tw`bg-white p-4 w-full border-b-2 border-gray-200 w-3/4`}
                placeholder='Enter Phone'
                maxLength={100}
                // onChangeText={}
                value={phone_num}
              />
            </View>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`w-1/4 text-center`}>Address</Text>
              <TextInput
                style={tw`bg-white p-4 w-full border-b-2 border-gray-200 w-3/4`}
                placeholder='Enter address'
                maxLength={100}
                multiline={true}
                // onChangeText={}
                value={address}
              />
            </View>
            <View style={tw`flex-row justify-around my-3`}>
              <TouchableOpacity
                style={tw`p-3 rounded-full bg-red-500`}
                onPress={() => setEditing(false)}
              >
                <Text style={tw`text-white px-2 font-semibold`}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[tw`p-3 rounded-full bg-gray-500`, { backgroundColor: "#949494" }]}
                onPress={() => setEditing(false)}
              >
                <Text style={tw`text-white font-semibold`}>Cancel</Text>
              </TouchableOpacity>
            </View>

          </>
        ) : (
          <>
            <View style={tw`mx-3`}>
              <Text>Name: {name}</Text>
              <Text>Image: {image}</Text>
              <Text>Email: {email}</Text>
              <Text>DOB: {DOB}</Text>
              <Text>Username: {username}</Text>
              <Text>Password: {password}</Text>
              <Text>Phone #: {phone_num}</Text>
              <Text>Address: {address}</Text>
            </View>

            <View style={tw`flex-row justify-around my-3`}>
              <TouchableOpacity
                style={tw`p-3 rounded-full bg-red-500 items-center`}
                onPress={() => setEditing(true)}
              >
                <Text style={tw`text-white font-semibold px-2`}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[tw`p-3 rounded-full bg-gray-500`, { backgroundColor: "#949494" }]}
                onPress={() => navigation.goBack()}
              >
                <Text style={tw`text-white font-semibold px-1`}>Back</Text>
              </TouchableOpacity>
            </View>

          </>
        )
        }

      </ScrollView>

    </SafeAreaView>
  )
}

export default MyAccount

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