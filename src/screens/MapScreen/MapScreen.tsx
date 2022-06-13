import React from 'react';
import { ScrollView, Image } from 'react-native';

export const MapScreen = () => {
  return (
    <ScrollView horizontal style={{ flex: 1 }}>
      <Image source={require('../../assets/Map.png')} />
    </ScrollView>
  );
};
