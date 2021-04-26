/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './screens/home/Home'
import HeaderApp from './components/header/Header'

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.test}>
        <HeaderApp/>
        <Home/>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  test: {
    flex: 1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
