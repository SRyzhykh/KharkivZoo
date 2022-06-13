import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SCREENS } from '../../constants';
import { MainScreen } from '../../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScanerScreen } from '../../screens/ScanerScreen';
import { ArScreen } from '../../screens/ArScreen/ArScreen';
import { MapScreen } from '../../screens/MapScreen/MapScreen';

const Tab = createBottomTabNavigator();

export const MenuStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: COLORS.CARD,
          shadowColor: COLORS.CARD,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon size={30} color={COLORS.ICON} name="home" />,
        }}
        name={SCREENS.MAIN}
        component={MainScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Icon size={30} color={COLORS.ICON} name="qrcode" />
          ),
        }}
        name={SCREENS.SCANER}
        component={ScanerScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon size={30} color={COLORS.ICON} name="magic" />,
        }}
        name={SCREENS.AR}
        component={ArScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon size={30} color={COLORS.ICON} name="map" />,
        }}
        name={SCREENS.MAP}
        component={MapScreen}
      />
    </Tab.Navigator>
  );
};
