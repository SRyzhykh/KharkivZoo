import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, SCREENS } from '../../constants';
import { LoginScreen, MainScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
        }}
      >
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={SCREENS.MAIN}
          component={MainScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.CARD,
            },
            headerTintColor: COLORS.LIGHT,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
