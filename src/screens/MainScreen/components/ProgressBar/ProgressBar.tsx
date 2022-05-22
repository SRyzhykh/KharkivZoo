import React from 'react';
import { View } from 'react-native';
import { styles } from './progressBar.styles';

export const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
      </View>
    </View>
  );
};
