import { View, Text, FlatList } from 'react-native';
import React from 'react';
import WurkerPost from '../components/WurkerPost';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/core';

const WURKERS = [
    {
        id: 0,
        name: "Joshua Beckman",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        description: "Hi there, I have been doing plumbing for 2 years. I have experience fixing house, restaurants, and office space. If you need a reliable and fast service I am your guy. I have the necessary equipment and an get the parts at a discount rate from my distributer.",
        skill: "Plumber",
        rating: 5,
    },
    {
        id: 1,
        name: "Chris Bumstead",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        description: "Hi there, I have been doing plumbing for 2 years. I have experience fixing house, restaurants, and office space. If you need a reliable and fast service I am your guy. I have the necessary equipment and an get the parts at a discount rate from my distributer.",
        skill: "Plumber",
        rating: 3,
    },
    {
        id: 2,
        name: "Joshua Beckman",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        description: "Hi there, I have been doing plumbing for 2 years. I have experience fixing house, restaurants, and office space. If you need a reliable and fast service I am your guy. I have the necessary equipment and an get the parts at a discount rate from my distributer.",
        skill: "Plumber",
        rating: 4,
    },
    {
        id: 3,
        name: "Joshua Beckman",
        image: "https://www.stylemotivation.com/wp-content/uploads/2019/09/plumber-main-620x496.jpg",
        description: "Hi there, I have been doing plumbing for 2 years. I have experience fixing house, restaurants, and office space. If you need a reliable and fast service I am your guy. I have the necessary equipment and an get the parts at a discount rate from my distributer.",
        skill: "Plumber",
        rating: 2,
    },
]

const WurkerList = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <FlatList
                data={WURKERS}
                keyExtractor={(item) => item.id}
                renderItem={({ item: wurker }) =>
                    <WurkerPost 
                        id={wurker.id}
                        image={wurker.image}
                        name={wurker.name}
                        skill={wurker.skill}
                        rating={wurker.rating}
                        description={wurker.description}
                    />
                }
            />

        </SafeAreaView>
    );
};

export default WurkerList;
