import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { AnimalCard } from './components';
import { styles } from './mainScreen.styles';

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimalCard style={styles.flexSize} />
      <View style={styles.flexSize} />
    </SafeAreaView>
  );
};
