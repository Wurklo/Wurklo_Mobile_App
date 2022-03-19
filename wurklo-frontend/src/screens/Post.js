import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Post = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  // make these redux values
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  const [isCollab, setIsCollab] = useState(false);
  const [isSolo, setIsSolo] = useState(false);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri)
      console.log('image --------------------------------', image)
    }
  }

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

      {image ? image &&
        <View style={tw`relative h-1/2`}>
          <Image source={{ uri: image }} style={tw`h-full`} />
          <TouchableOpacity 
          onPress={() => setImage(null)}
          style={tw`absolute bottom-3 left-4`}
          >
            <MaterialCommunityIcons style={tw`text-white`} name="camera-retake-outline" size={34} color="white" />
          </TouchableOpacity>
        </View>
        :
        <Camera
          ref={ref => setCamera(ref)}
          style={tw`h-1/2`}
          type={type}
          ratio={'1:1'}
        >
          <View style={[tw`justify-center`, styles.buttonContainer]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <MaterialCommunityIcons style={tw`mb-2`} name="rotate-3d-variant" size={34} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[tw``, styles.button]}
              onPress={() => takePicture()}
            >
              <MaterialCommunityIcons style={tw`mb-2`} name="camera-iris" size={34} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      }

      <View style={tw`h-1/2 justify-around items-center`}>
        <TextInput
          style={[tw`bg-white p-4 w-72 rounded-full`, styles.cardShadow]}
          placeholder='Title'
          maxLength={100}
        />
        <TextInput
          style={[tw`bg-white p-4 w-72 h-20 rounded-3xl`, styles.cardShadow]}
          placeholder='Description'
          maxLength={500}
        />
        <View style={tw`flex-row`}>
          <TouchableOpacity
            onPress={() => setIsCollab(true) & setIsSolo(false)}
            style={[tw`px-2 rounded-full -ml-32 ${isCollab ? 'bg-blue-500' : 'bg-gray-500'}`, styles.cardShadow]}
          >
            <Text style={tw`p-2 text-white font-semibold`}>Collab+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsSolo(true) & setIsCollab(false)}
            style={[tw`px-2 bg-yellow-500 rounded-full ml-3 ${isSolo ? 'bg-yellow-500' : 'bg-gray-500'}`, styles.cardShadow]}
          >
            <Text style={tw`p-2 text-white font-semibold`}>Solo</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row`}>
          <TextInput
            style={[tw`bg-white p-4 mr-3 w-52 rounded-full`, styles.cardShadow]}
            placeholder='Price'
          />
          <TouchableOpacity
            style={[tw`bg-red-600 rounded-3xl`, styles.cardShadow]}
          >
            <Text style={[tw`p-4 text-white font-semibold`]}>Post</Text>
          </TouchableOpacity>
        </View>
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
    flex: 0.5,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  button: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
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