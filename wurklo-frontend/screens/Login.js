import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
  return (
    <View style={tw`flex-1 bg-white justify-around`}>
      <StatusBar hidden />
      <View style={tw`flex-row justify-center`}>
        <Image
          style={tw`h-36 w-36`}
          source={{ uri: "https://i.ibb.co/bd78VGy/Wurklo-logo-2.png" }}
        />
      </View>
      <View style={tw`flex-row justify-around`}>
        <View style={tw``}>
          <Text style={tw`font-black text-blue-500 text-3xl tracking-tight`}>WURKLO</Text>
        </View>
        <View>
          <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>A</Text>
          <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>COIN</Text>
          <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>FOR</Text>
          <Text style={tw`font-black text-blue-500 text-3xl ml-1 tracking-tight`}>WURKERS</Text>
        </View>
      </View>
      <View style={tw`mx-10`}>
        <TextInput
          style={tw`text-center text-xl pb-2 bg-gray-100 rounded-2xl mb-2`}
          placeholder='Username'
        />
        <TextInput
          style={tw`text-center text-xl pb-2 bg-gray-100 rounded-2xl`}
          placeholder='Password'
        />
      </View>
      <View style={tw`mx-20`}>
        <TouchableOpacity
          style={tw`bg-yellow-600 rounded-full mb-2`}
        >
          <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-yellow-600 rounded-full`}
        >
          <Text style={tw`p-2 px-4 font-semibold text-xl text-white text-center`}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
