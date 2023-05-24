import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Active from './active'
import Blocked from './blocked'

const Stack = createNativeStackNavigator();

function Card() {
  return (
    <Stack.Navigator initialRouteName='Active'>
      <Stack.Screen name="Active" component={Active} options={{ headerShown: false }} />
      <Stack.Screen name="Blocked" component={Blocked} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Card;