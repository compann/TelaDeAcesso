import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes'
import 'react-native-reanimated'
import Main from '../apk/src/pages/Main'

export default function App() {
  return (
    
      <NavigationContainer>
        <StatusBar backgroundColor="#38a69d" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>

  );
}


