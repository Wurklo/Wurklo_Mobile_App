import { View, Text } from 'react-native';
import React from 'react';
import WurkerPost from '../components/WurkerPost';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const WurkerList = () => {
  return (
    <SafeAreaView>
        <StatusBar style="auto" />
      <WurkerPost />
    </SafeAreaView>
  );
};

export default WurkerList;
