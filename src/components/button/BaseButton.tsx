import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './baseButton.styles';
import { BaseButtonProps } from './baseButton.types';

export const BaseButton: React.FC<BaseButtonProps> = ({
  text,
  style,
  onPress,
}) => {
  return (
    <Pressable style={[style, styles.button]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};
