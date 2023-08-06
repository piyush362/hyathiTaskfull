import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePage from './screens/HomePage.js';
import { AppStack } from './navigation/AppStack';
import { AuthStack } from './navigation/AuthStack';
import { useEffect, useState } from 'react';
import Router from './navigation/Router.js';

// context 
import { AuthProvider } from './context/AuthContext.js';


export default function App() {

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
