import React, { useState, useEffect } from 'react'
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import CardApp from '../../components/card/Card';
import axios  from 'axios';


const Home : () => Node = () => {

  //States
  const [moviesData, setMoviesData] = useState('')


  //Efects
    useEffect(() => {
    getMoviesData()
  }, [])

  async function getMoviesData(){
    try {
      let q = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey:'5eec5adc',
          s:'love',
          y: 2020,
          type: 'movie'
        }
      })
      setMoviesData(q.data.Search)
      console.log('la qry es => ', q.data);
    } catch (error) {
      console.log('el error es => ', error);
    }
  } 


  return (
    <SafeAreaView style={styles.homePrincipalArea}>
      <View>
        <FlatList
          data={moviesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index, separators }) => (
            <CardApp
              obj={item}
              key={index + item.Title}
              // onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight} 
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homePrincipalArea: {
    backgroundColor: '#000000',
    flex: 1,
    color: '#FFF'
  },
  test: {
    backgroundColor: 'red'
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

export default Home
