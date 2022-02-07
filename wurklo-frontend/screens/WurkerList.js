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
        image: "https://barbend.com/wp-content/uploads/2021/10/Chris-Bumstead.jpg",
        "description": "Are you looking for a buff trainer to take you to the next level? Well, Im the guy for you. Knock out a couple of reps by hitting that hire button and send me a DM. Its time to build those abs",
        skill: "Trainer",
        rating: 3,
    },
    {
        id: 2,
        name: "Mark Zuckerburg",
        image: "https://selftaught.blog/wp-content/uploads/2019/01/MarkZuckerberg.jpg",
        "description": "I am a coder, I started a company called Facebook, but now I like to do coding in my spare time for fun.",
        skill: "Coder",
        rating: 4,
    },
    {
        id: 3,
        name: "Hulk Hogan",
        image: "https://blog.fantasticgardeners.co.uk/wp-content/uploads/2016/08/garden-maintenance-by-Fantastic-gardeners.jpg",
        "description": "Are you looking for a gardener with some celeb status. Thats me your famous Hulk Hogan here to provide you with exceptionally gardening skills.",
        skill: "Gardener",
        rating: 3,
    },
    {
        id: 4,
        name: "Ash Ketchum",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ash_Ketchum_%285764005330%29.jpg/220px-Ash_Ketchum_%285764005330%29.jpg",
        "description": "I train pokemon, you need me. No one else has this skill",
        skill: "Pokemon Trainer",
        rating: 5,
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
