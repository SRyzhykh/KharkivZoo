import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SCREENS } from '../../constants';
import { MainScreen } from '../../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScanerScreen } from '../../screens/ScanerScreen';

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
      <Tab.Screen name={SCREENS.SCANER} component={ScanerScreen} />
    </Tab.Navigator>
  );
};
