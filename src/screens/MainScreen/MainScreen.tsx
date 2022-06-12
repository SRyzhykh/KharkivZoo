import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { AnimalCard } from './components';
import { InfoBoard } from './components/InfoBoard/InfoBoard';
import { styles } from './mainScreen.styles';

const data = [
  {
    name: 'globe',
    info: 'Живуть в тропічних лісах Центральної і Південної Америки.',
  },
  {
    name: 'arrows-h',
    info: 'Довжина тіла – близько 60см.',
  },
  {
    name: 'balance-scale',
    info: 'Вага – до 4 кг.',
  },
  {
    name: 'cutlery',
    info: 'У раціон входять: квіти, листя, кора, корені, плоди, що впали, насіння і різні види горіхів.',
  },
  {
    name: 'clock-o',
    info: 'Тривалість життя в неволі – до 20 років, в дикій природі значно менше.',
  },
];

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimalCard style={styles.cardContainer} />
      <View style={styles.infoContainer}>
        <InfoBoard data={data} />
      </View>
    </SafeAreaView>
  );
};
