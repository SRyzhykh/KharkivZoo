import React from 'react';
import { Image, SafeAreaView, View, Text } from 'react-native';
import { ProgressBar } from './components';
import { styles } from './mainScreen.styles';

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animalCard}>
        <Image source={require('../../assets/monke.jpg')} style={styles.animalPop} />
        <Text style={styles.header}>Monkey</Text>
      </View>
    </SafeAreaView>
  );
};
