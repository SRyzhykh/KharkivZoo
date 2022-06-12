import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './scanerScreen.styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Linking } from 'react-native';
import { RNCamera } from 'react-native-camera';

const onSuccess = (e) => {
  Linking.openURL(e.data).catch((err) =>
    console.error('An error occured', err),
  );
};

export const ScanerScreen = () => {
  return (
    <View style={styles.container}>
      <QRCodeScanner onRead={onSuccess} />
      <Text style={styles.text}>Put QR code into scanner</Text>
    </View>
  );
};
