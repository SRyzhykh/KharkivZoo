import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { LoginScreen } from './screens';
import { styles } from './app.styles';

const App = () => {
  return (
    <ImageBackground
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      source={require('./assets/background.jpg')}
      resizeMode="stretch"
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <LoginScreen />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
