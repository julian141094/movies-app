import React from 'react'
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Header } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Input, Button, Overlay } from 'react-native-elements';


const MyCustomLeftComponent = () => {
  return (
    <Button
      type={'clear'}
      icon={
        <Icon
          name="filter"
          size={24}
          color="white"
        />
      }
    />
  )
}

const MyCustomRightComponent = () => {
  return (
    <Button
      type={'clear'}
      icon={
        <Icon
          name="search"
          size={24}
          color="white"
        />
      }
    />
  )
}


const InputSearch = () => {
  return (
    <Input
      placeholder='Search...'
      // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
    />
  )
}

const HeaderApp : () => Node = () => {
  return (
    <SafeAreaView>
      <Header
        backgroundColor={'#000'}
        statusBarProps={{ barStyle: 'light-content' }}
        containerStyle={styles.generalContainer}
        leftContainerStyle={styles.sideContainer}
        rightContainerStyle={styles.sideContainer}
        centerContainerStyle={styles.centerContainer}
      >
        <MyCustomLeftComponent/>
        <InputSearch/>
        <MyCustomRightComponent/>
      </Header>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  principalArea: {
    backgroundColor: 'red',
    color: '#FFF'
  },
  generalContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  sideContainer: {
    maxWidth: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  test: {
    backgroundColor: 'red'
  },
});

export default HeaderApp
