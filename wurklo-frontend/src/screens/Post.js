import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
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


  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      console.log(data);
    }  
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


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
    <SafeAreaView style={tw`flex-1`} edges={["left", "right", "top"]}>
      <StatusBar style='auto' />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={tw`flex`}>
          {image ? image &&
            <View style={tw`relative h-96`}>
              <Image source={{ uri: image }} style={tw`h-full`} />
              <TouchableOpacity
                onPress={() => setImage(null)}
                style={tw`absolute bottom-3 left-4`}
              >
                <MaterialCommunityIcons name="camera-retake-outline" size={34} color="#FAF9F6" />
              </TouchableOpacity>
            </View>
            :
            <Camera
              ref={ref => setCamera(ref)}
              style={tw`h-96`}
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
                  <MaterialCommunityIcons style={tw`mb-2`} name="rotate-3d-variant" size={38} color="#FAF9F6" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[tw``, styles.button]}
                  onPress={() => takePicture()}
                >
                  <MaterialCommunityIcons style={tw`mb-2`} name="camera-iris" size={38} color="#FAF9F6" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[tw``, styles.button]}
                  onPress={() => pickImage()}
                >
                  <MaterialCommunityIcons style={tw`mb-2`} name="folder-upload-outline" size={38} color="#FAF9F6" />
                </TouchableOpacity>
              </View>
            </Camera>
          }

          <TextInput
            style={[tw`bg-white p-4 mb-1 w-full`, styles.cardShadow]}
            placeholder='Title... ex. Building an electric car'
            maxLength={100}
          />
          <TextInput
            style={[tw`bg-white p-4 mb-1 w-full h-20`, styles.cardShadow]}
            placeholder='Description... ex. This project is...'
            maxLength={500}
          />
          <TextInput
            style={[tw`bg-white p-4 mb-1 mr-3 w-full`, styles.cardShadow]}
            placeholder='Price ex. 50'
          />
          <TextInput
            style={[tw`bg-white p-4 mb-1 mr-3 w-full`, styles.cardShadow]}
            placeholder='Wurker skill ex. programmer'
          />
          <View style={tw`items-center`}>
            <TouchableOpacity
              style={[tw`w-20 bg-red-600 rounded-3xl my-1`, styles.cardShadow]}
            >
              <Text style={[tw`px-4 py-3 text-white font-semibold text-center`]}>Post</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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