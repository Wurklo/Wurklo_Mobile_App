import { FlatList } from 'react-native';
import React from 'react';
import WurkerPost from '../components/WurkerPost';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

//redux
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';

const WurkerList = () => {
    //redux
    const { wurkers } = useSelector((state) => state.wurkers)

    return (
        <SafeAreaView edges={['right', 'top', 'left']}>
            <StatusBar style="auto" />
            <FlatList
                contentContainerStyle={tw`pb-32`}
                data={wurkers}
                keyExtractor={(item) => item.id}
                renderItem={({ item: wurker }) =>
                    <WurkerPost 
                        id={wurker.id}
                        image={wurker.image}
                        name={wurker.name}
                        skill={wurker.skill}
                        rating={wurker.rating}
                        description={wurker.description}
                        payrate={wurker.pay_rate}
                        upvote={wurker.upvote}
                        downvote={wurker.downvote}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default WurkerList;
