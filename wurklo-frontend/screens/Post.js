import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Post = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar style='auto' />
      <Camera style={tw`h-1/2`} type={type} ratio={'1:1'}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={[tw`w-10`, styles.text]}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={tw`h-1/2 justify-around items-center`}>
        <TextInput
          style={tw`bg-white border p-4 w-3/4`}
          placeholder='Title'
        />
        <TextInput
          style={tw`bg-white border p-4 w-3/4`}
          placeholder='Description'
        />
        <View style={tw`flex-row justify-between`}>
          <TouchableOpacity style={tw`px-2 bg-blue-500 rounded-full mr-8`}>
            <Text style={tw`p-2 text-white font-semibold`}>Collab+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-2 bg-yellow-500 rounded-full ml-8`}>
            <Text style={tw`p-2 text-white font-semibold`}>Solo</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={tw`bg-white border p-4 w-3/4`}
          placeholder='Price'
        />
      </View>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});