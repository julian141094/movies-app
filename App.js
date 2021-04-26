/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Input, Button, Overlay } from 'react-native-elements';


import Home from './screens/home/Home'
import HeaderApp from './components/header/Header'

const App: () => Node = () => {
  //States
  const [visible, setVisible] = useState(false);
  const [years, setYears] = useState('2020');
  const [nameField, setNameField] = useState('love');

  //Normal functions
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const Modal = () => {
    return (
      <View style={styles.modalGeneral}>
        <View style={styles.modalContentAreaTitle}>
          <Text style={styles.modalContentTitle}>Search Settings</Text>      
        </View>
        <View style={styles.modalContentArea}>
          <Input
            value={years}
            label='Year'
            labelStyle={styles.yearField}
            style={styles.yearField}
            keyboardType="numeric"
            // onChangeText={years => setYears(years)}
          />     
        </View>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <View style={styles.test}>
        <View>
          <Overlay 
            isVisible={visible} 
            onBackdropPress={() => {toggleOverlay()}}
            overlayStyle={styles.overlay}
          >
              <Modal/>
          </Overlay>
        </View>
        {/* <HeaderApp /> */}
        <HeaderApp 
          openModal={toggleOverlay} 
          updateField={setNameField}
          nameField={nameField}
        />
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



  contentBoldText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

  overlay: {
    backgroundColor: '#1c1c1c',
    // height: '85%',
    width: '95%',
    padding: 0
  },
  overlayBackgroudImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end',
    padding: 0,
    opacity: 0.7,
  },
  modalGeneral: {
    padding: 0,
    height: '50%',
    width: '100%',
    left: 0,
    opacity: 9,
    backgroundColor: '#1c1c1c',
    color: 'white',
  },
  modalContentAreaTitle: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  modalContentTitle: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },

  modalContentArea: {
    paddingHorizontal: 15,
  },

  switchContentArea: {
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  yearField: {
    color: 'white'
  }
});

export default App;
