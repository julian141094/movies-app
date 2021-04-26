import React, { useState }from 'react'
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



const HeaderApp = ({openModal, updateField, nameField}) => {
  
  const MyCustomLeftComponent = () => {
    return (
      <View>
        <Button
          type={'clear'}
          onPress={() => {
            openModal()
          }}
          icon={
            <Icon
              name="filter"
              size={24}
              color="white"
            />
          }
        />
      </View>
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
        // value={nameField}
        placeholder='Search...'
        // onChangeText={(name) => updateField(name)}
        style={styles.nameField}
        // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      />
    )
  }
  

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
  nameField: {
    color: 'white'
  }
});

export default HeaderApp
