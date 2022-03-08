import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
//fellow
const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        resizeMode="cover"
        style={tw`flex-1 justify-around`}
        source={{ uri: "https://i.ibb.co/WFP9vP9/login-bg.jpg" }}
      >
        <StatusBar hidden />
        <View style={tw`flex-row justify-center`}>
          <Image
            style={tw`h-36 w-36`}
            source={{ uri: "https://i.ibb.co/bd78VGy/Wurklo-logo-2.png" }}
          />
        </View>
        <View style={tw`flex-row justify-around`}>
          <View style={tw``}>
            <Text style={tw`font-bold text-white text-4xl tracking-tight`}>WURKLO</Text>
          </View>
          <View>
            <Text style={tw`font-bold text-blue-500 text-3xl ml-1 tracking-tight`}>A</Text>
            <Text style={tw`font-bold text-blue-500 text-3xl ml-1 tracking-tight`}>COIN</Text>
            <Text style={tw`font-bold text-blue-500 text-3xl ml-1 tracking-tight`}>FOR</Text>
            <Text style={[tw`font-bold text-blue-500 text-3xl ml-1 tracking-tight`, styles.fontBold]}>WURKERS</Text>
          </View>
        </View>
        <View style={tw`mx-20`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginModal")}
            style={[tw`bg-yellow-600 rounded-full mb-2`, styles.cardShadow]}
          >
            <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Login</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("RegisterModal")}
            style={[tw`bg-gray-400 rounded-full`, styles.cardShadow]}
          >
            <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Register</Text>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View >
  );
};

export default Login;

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
  fontBold: {
    fontWeight: '700',
  }
});