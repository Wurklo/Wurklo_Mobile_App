import { View, Text } from 'react-native';
import React from 'react';
import WurkerPost from '../components/WurkerPost';
import { SafeAreaView } from 'react-native-safe-area-context';

const WurkerList = () => {
  return (
    <SafeAreaView>
      <WurkerPost />
    </SafeAreaView>
  );
};

export default WurkerList;
