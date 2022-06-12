import React from 'react';
import { ImageBackground } from 'react-native';
import { BaseButton } from '../../components/button/BaseButton';
import { BaseInput } from '../../components/input/BaseInput';
import { COLORS, SCREENS } from '../../constants';
import { styles } from './LoginScreen.styles';
import { LoginProps } from './loginScreen.types';

export const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <ImageBackground
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      source={require('../../assets/background.jpg')}
      resizeMode="stretch"
      style={styles.container}
    >
      <BaseInput placeholder="Логін" placeholderTextColor={COLORS.SECONDARY} />
      <BaseInput placeholder="Пароль" placeholderTextColor={COLORS.SECONDARY} />
      <BaseButton
        text="Увійти"
        style={styles.button}
        onPress={() => navigation.navigate(SCREENS.TABS)}
      />
    </ImageBackground>
  );
};
