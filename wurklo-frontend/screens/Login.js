import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
  return (
    <View style={tw`flex-row flex-1`}>
      <StatusBar hidden />
      <View style={tw`flex-1 bg-blue-500 justify-center items-center`}>
        <Text style={tw`font-black text-white text-3xl tracking-tight`}>WURKLO</Text>
      </View>
      <View style={tw`flex-1 bg-white justify-center`}>
        <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>A</Text>
        <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>COIN</Text>
        <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>FOR</Text>
        <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>WURKERS</Text>
      </View>
      <TouchableOpacity
        style={[tw`absolute bottom-28 bg-yellow-600 rounded-full w-1/2`, { marginHorizontal: "25%" }]}
      >
        <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[tw`absolute bottom-12 bg-yellow-600 rounded-full w-1/2`, { marginHorizontal: "25%" }]}
      >
        <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Register</Text>
      </TouchableOpacity>
      <Image
        style={[tw`absolute top-16`]}
        height={100}
        width={100}
        source={{ uri: "https://i.ibb.co/bd78VGy/Wurklo-logo-2.png" }}
      />
    </View>
  );
};

export default Login;
