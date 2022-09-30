/**
 * Agun Buhori - Alami React Native Test
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {StyleSheet} from 'react-native';
import DeviceScreen from './src/screens/DeviceScreen';
import CartScreen from './src/screens/CartScreen';
import ProgressScreen from './src/screens/ProgressScreen';

export type RootStackParamList = {
  Home: undefined;
  Device: undefined;
  Cart: undefined;
  Progress: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Device" component={DeviceScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Progress" component={ProgressScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
