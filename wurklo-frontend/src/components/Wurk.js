import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Tablet from './Tablet';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  return (
    <SafeAreaView style={tw`flex-1 -mb-16`} edges={["left",, "top", "right"]}>
      <ScrollView>
        <View style={[tw`items-center pt-2`, {backgroundColor: 'gray'}]}>
          <Text style={[tw`text-xl text-white font-bold`, style.cardShadow]}>Wurkers I hired</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: 'gray'}}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />

        </ScrollView>

        <View style={[tw`items-center`, {backgroundColor: 'gray'}]}>
          <Text style={[tw`text-xl text-white font-bold`, style.cardShadow]}>Projects I wurk on</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: 'gray'}}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />

        </ScrollView>
        <View style={[tw`items-center`, {backgroundColor: 'gray'}]}>
          <Text style={[tw`text-xl text-white font-bold`, style.cardShadow]}>Scheduled Wurk</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: 'gray'}}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />

        </ScrollView>
        <View style={[tw`items-center`, {backgroundColor: 'gray'}]}>
          <Text style={[tw`text-xl text-white font-bold`, style.cardShadow]}>Request for me to do wurk</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: 'gray'}}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />

        </ScrollView>
        <View style={[tw`items-center`, {backgroundColor: 'gray'}]}>
          <Text style={[tw`text-xl text-white font-bold`, style.cardShadow]}>Request by me to get wurk</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: 'gray'}}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />

        </ScrollView>
        <View style={[tw`items-center`, {backgroundColor: 'gray'}]}>
          <Text style={[tw`text-xl text-white font-bold`, style.cardShadow]}>Favorite Wurkers</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: 'gray'}}
        >
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />
          <Tablet />

        </ScrollView>
        <View style={[tw`items-center`, {backgroundColor: 'gray'}]}>
          <Text style={[tw`text-xl text-white font-bold`, style.cardShadow]}>Favorite Projects</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[tw`pb-8`, {backgroundColor: 'gray'}]}
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

const style = StyleSheet.create({
  cardShadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.2,
      textShadowColor: "#4C4C4C",
      textShadowOffset: {
          width: 0,
          height: 2,
      },
      textShadowRadius: 3,
      elevation: 1,
  }
});