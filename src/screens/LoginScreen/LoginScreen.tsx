import React from 'react';
import { View } from 'react-native';
import { BaseButton } from '../../components/button/BaseButton';
import { BaseInput } from '../../components/input/BaseInput';
import { COLORS } from '../../constants';
import { styles } from './LoginScreen.styles';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <BaseInput placeholder="Логін" placeholderTextColor={COLORS.SECONDARY} />
      <BaseInput placeholder="Пароль" placeholderTextColor={COLORS.SECONDARY} />
      <BaseButton text="Увійти" style={styles.button} />
    </View>
  );
};
