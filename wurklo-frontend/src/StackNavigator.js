import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectList from './screens/ProjectList';
import ProjectDetails from './screens/ProjectDetails';
import WurkerDetails from './screens/WurkerDetails';
import WurkerList from './screens/WurkerList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Wurk from './components/Wurk';
import Post from './screens/Post';
import PersonalChat from './screens/PersonalChat';
import Profile from './screens/Profile';
import tw from 'tailwind-react-native-classnames';
import Login from './screens/Login';
import LoginModal from './screens/LoginModal';
import RegisterModal from './screens/RegisterModal';
import { useSelector } from 'react-redux';
import GroupChat from './screens/GroupChat';
import Chat from './screens/Chat';
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// home screen for wurkers and projects with swipe function ** top nav **
const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName='ProjectList'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 0
                }
            }}
        >
            <Tab.Screen name="WurkerList" component={WurkerList} />
            <Tab.Screen name="ProjectList" component={ProjectList} />
        </Tab.Navigator>
    )
}

// top nav for messages
const Messages = () => {
    return (
        <Tab.Navigator
            initialRouteName='PersonalChat'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarLabelStyle: style.cardShadow,
                headerShown: false,
                tabBarStyle: {
                    marginTop: 33,
                    backgroundColor: 'gray',
                }
            }}
        >
            <Tab.Screen
                name="Personal"
                component={PersonalChat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name='people' size={50} color={focused ? "skyblue" : "white"}  style={[tw`-mr-7 -ml-3 -mt-3`, style.cardShadow]}/>
                    )
                }}
            />
            <Tab.Screen
                name="Group"
                component={GroupChat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name='groups' size={50} color={focused ? "skyblue" : "white"}  style={[tw`-mr-7 -ml-3 -mt-3`, style.cardShadow]}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

// bottom nav bar component
const HomeWurk = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarLabelStyle: style.cardShadow,
                headerShown: false,                
                tabBarStyle: {
                    // position: 'absolute',
                    // bottom: 15,
                    // left: 20,
                    // right: 20,
                    // elevation: 5,
                    backgroundColor: "gray",
                    // borderRadius: 25,
                    height: 75,
                    paddingBottom: 20,
                    paddingTop: 5
                }
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarActiveTintColor: "skyblue",
                    tabBarInactiveTintColor: "white",
                    tabBarIcon: ({ focused }) => (
                        <Entypo name='home' size={30} color={focused ? "skyblue" : "white"} style={style.cardShadow}/>
                    )
                }}
            />
            <BottomTab.Screen
                name="Wurk"
                component={Wurk}
                options={{
                    tabBarActiveTintColor: "skyblue",
                    tabBarInactiveTintColor: "white",
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name='briefcase-variant' size={30} color={focused ? "skyblue" : "white"} style={style.cardShadow}/>
                    )
                }}
            />
             {/* style={[tw`absolute -top-4 bg-white p-2 -m-3`, { borderRadius: 36, overflow: 'hidden' }]} */}
            <BottomTab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarActiveTintColor: "skyblue",
                    tabBarInactiveTintColor: "white",
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name='add-circle-outline' size={40} color={focused ? "skyblue" : "white"} style={[tw`-m-2 pb-2`, style.cardShadow]}/>
                    )
                }}
            />
            <BottomTab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarActiveTintColor: "skyblue",
                    tabBarInactiveTintColor: "white",
                    tabBarIcon: ({ focused }) => (
                        <Entypo name='message' size={32} color={focused ? "skyblue" : "white"} style={style.cardShadow}/>
                    )
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarActiveTintColor: "skyblue",
                    tabBarInactiveTintColor: "white",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='person' size={30} color={focused ? "skyblue" : "white"} style={style.cardShadow}/>
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

const StackNavigator = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <>
                    <Stack.Group>
                        <Stack.Screen name="HomeWurk" component={HomeWurk} />
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
                        <Stack.Screen name="WurkerDetails" component={WurkerDetails} />
                        <Stack.Screen name="Chat" component={Chat} />
                    </Stack.Group>
                </>
            ) : (
                <>
                    <Stack.Group>
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="LoginModal" component={LoginModal} />
                        <Stack.Screen name="RegisterModal" component={RegisterModal} />
                    </Stack.Group>
                </>
            )}

        </Stack.Navigator>
    );
};

export default StackNavigator;

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
    }
});