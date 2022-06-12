import React from 'react';
import { Image, StyleProp, Text, View, ViewStyle } from 'react-native';
import { ProgressBar } from '..';
import { styles } from './animalCard.styles';
import Carousel from 'react-native-reanimated-carousel';

interface Props {
  style: StyleProp<ViewStyle>;
}

const data = [
  {
    title: 'Агуті Центральноамериканський',
    image: require('../../../../assets/animal.png'),
  },
  {
    title: 'Лев Центральноамериканський',
    image: require('../../../../assets/nextAnimal.png'),
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.carouselContainer}>
      <View>
        <Image style={styles.animalImage} source={item.image} />
      </View>
      <Text style={styles.carouselText}>{item.title}</Text>
    </View>
  );
};

export const AnimalCard: React.FC<Props> = ({ style }) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <Text style={styles.header}>Досліджуйте Харківський зоопарк</Text>
      <View style={styles.carousel}>
        <Carousel
          loop={false}
          width={600}
          height={300}
          data={data}
          renderItem={renderItem}
        />
      </View>
      <ProgressBar style={styles.progressBar} />
    </View>
  );
};
