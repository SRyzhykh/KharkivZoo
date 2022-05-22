import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './baseInput.styles';
import { BaseInputProps } from './baseInput.types';

export const BaseInput: React.FC<BaseInputProps> = ({
  placeholder,
  placeholderTextColor,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
