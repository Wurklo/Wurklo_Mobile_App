import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/core';
import axios from '../redux/axios';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../redux/slices/projects';


const Post = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [progress, setProgress] = useState(0);
  const [skillNum, setSkillNum] = useState(1);


  //redux
  const dispatch = useDispatch();

  // make these redux values and could make all in one line using object
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [pay_rate, setPayRate] = useState(null);
  const [skill, setSkill] = useState([]);

  // write a function that will set collab to true 
  // anytime a project has more than one skill requested
  const [isCollab, setIsCollab] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      setImage(data.uri);
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage("data:image/image/png;base64," + result.base64);
    }
  };


  const handleUpload = async () => {
    const response = await axios.get("/s3")

    console.log("Response", response.data.data)

    await fetch(response.data.data, {
      method: "PUT",
      body: image
    });

    console.log("image", image)


    const postData = { image, title, description, pay_rate, skill };
    console.log("postDate", postData)
    // this can be changed later to something better
    if (image && title && description && pay_rate && skill) {
      // dispatch(createProject(postData));

      // setImage(null);
      // setTitle(null);
      // setDescription(null);
      // setPayRate(null);
      // setSkill(null);
      // navigation.navigate("Home");
      return;
    }
    alert("Complete form first")
    return;
  }

  if (hasCameraPermission === false || hasCameraPermission === null) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>No access to camera</Text>
        <Text>Go to settings to give app camera permission</Text>
      </View>
    );
  } else if (hasCameraPermission !== null && isFocused) {

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
              style={[tw`bg-white p-4 w-full border-b-2 border-gray-200`, styles.cardShadow]}
              placeholder='Title... ex. Building an electric car'
              maxLength={100}
              multiline={true}

              onChangeText={setTitle}
              value={title}
            />
            <TextInput
              style={[tw`bg-white p-4 w-full h-20 border-b-2 border-gray-200`, styles.cardShadow]}
              placeholder='Description... ex. This project is...'
              maxLength={500}
              multiline={true}
              onChangeText={setDescription}
              value={description}
            />
            <TextInput
              style={[tw`bg-white p-4 mr-3 w-full border-b-2 border-gray-200`, styles.cardShadow]}
              placeholder='Price... ex. 50'
              maxLength={30}
              keyboardType='numeric'
              onChangeText={setPayRate}
              value={pay_rate}
            />
            <View style={tw`relative`}>
              {Array(skillNum).fill().map((i) => (
                <TextInput
                  style={[tw`bg-white p-4 mr-3 w-full border-b-2 border-gray-200`, styles.cardShadow]}
                  placeholder='Wurker skill... ex. programmer'
                  maxLength={30}
                  onChangeText={setSkill}
                  value={skill}
                />
              ))}
              <TouchableOpacity
                style={tw`absolute right-0 top-0.5 p-2`}
                onPress={() => {
                  if (skillNum >= 5) { setSkillNum(5) };
                  if (skillNum < 5) { const num = skillNum + 1; setSkillNum(num) };
                }}
              >
                <MaterialCommunityIcons name="plus-thick" size={30} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`absolute right-10 top-0.5 p-2`}
                onPress={() => {
                  if (skillNum >= 5) { setSkillNum(5) };
                  if (skillNum < 5) { const num = skillNum + 1; setSkillNum(num) };
                }}
              >
                <MaterialCommunityIcons name="minus-circle" size={30} color="red" />
              </TouchableOpacity>
            </View>
            <View style={tw`items-center mb-10`}>
              <TouchableOpacity
                style={[tw`w-40 bg-red-600 rounded-3xl mt-4`, styles.cardShadow]}
                onPress={handleUpload}
              >
                <Text style={[tw`px-4 py-2 text-white font-semibold text-center text-xl`]}>Post</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  } else {
    return null;
  }
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