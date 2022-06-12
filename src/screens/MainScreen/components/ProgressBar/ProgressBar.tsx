import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { styles } from './progressBar.styles';

interface Props {
  style: StyleProp<ViewStyle>;
}

export const ProgressBar: React.FC<Props> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
      </View>
    </View>
  );
};
