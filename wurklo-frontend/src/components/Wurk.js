import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Tablet from './Tablet';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  return (
    <SafeAreaView style={tw`flex-1`} edges={["left", "top", "right"]}>
      <ScrollView>
        <View style={tw`items-center bg-gray-500`}>
          <Text style={tw`text-xl text-white font-bold`}>Wurkers I hired</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mr-2`}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
  
        </ScrollView>
        <View style={tw`items-center bg-gray-500`}>
          <Text style={tw`text-xl text-white font-bold`}>Projects I wurk on</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mr-2`}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
  
        </ScrollView>
        <View style={tw`items-center bg-gray-500`}>
          <Text style={tw`text-xl text-white font-bold`}>Wurk I accepted to do</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mr-2`}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
  
        </ScrollView>
        <View style={tw`items-center bg-gray-500`}>
          <Text style={tw`text-xl text-white font-bold`}>Request for me to do wurk</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mr-2`}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
  
        </ScrollView>
        <View style={tw`items-center bg-gray-500`}>
          <Text style={tw`text-xl text-white font-bold`}>Request by me to get wurk</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mr-2`}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
  
        </ScrollView>
        <View style={tw`items-center bg-gray-500`}>
          <Text style={tw`text-xl text-white font-bold`}>Favorite Wurkers</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mr-2`}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
  
        </ScrollView>
        <View style={tw`items-center bg-gray-500`}>
          <Text style={tw`text-xl text-white font-bold`}>Favorite Projects</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`mr-2`}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
  
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
