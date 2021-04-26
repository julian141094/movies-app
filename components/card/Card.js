import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Overlay, Rating } from 'react-native-elements';
import axios  from 'axios';


const CardApp = ({
  obj
}) => {
  //States
  const [visible, setVisible] = useState(false);
  const [movieData, setMovieData] = useState('');

  //Efects
  useEffect(() => {
    console.log('El objeto !!!!!!!', obj);
  }, [])
  
  //Normal functions
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  
  async function getMovieData(id){
    try {
      let q = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey:'5eec5adc',
          i: id,
          plot: 'full'
        }
      })
      setMovieData(q.data)
      // console.log('la qry es => ', q.data);
    } catch (error) {
      // console.log('el error es => ', error);
    }
  } 
  
  const SeeButton = () => {
    return (
      <Button
        type={'clear'}
        onPress={() => {
          getMovieData(obj.imdbID)
          toggleOverlay()
        }}
        icon={
          <Icon
            name="eye"
            size={24}
            color="white"
          />
        }
      />
    )
  }
  
  const LikeButton = () => {
    return (
      <Button
        type={'clear'}
        icon={
          <Icon
            name="thumbs-up"
            size={24}
            color="white"
          />
        }
      />
    )
  }
  
  const DisLikeButton = () => {
    return (
      <Button
        type={'clear'}
        icon={
          <Icon
            name="thumbs-down"
            size={24}
            color="white"
          />
        }
      />
    )
  }
  
  const ShareButton = () => {
    return (
      <Button
        type={'clear'}
        icon={
          <Icon
            name="share-alt"
            size={24}
            color="white"
          />
        }
      />
    )
  }

  const Modal = () => {
    return (
      <View style={styles.modalGeneral}>
        <View style={styles.modalContentAreaTitle}>
          <Text style={styles.modalContentTitle}>{movieData.Title}</Text>      
        </View>
        <View style={styles.contentAreaTitle}>
          <Text style={styles.contentBoldText}>Year: <Text style={styles.contentText}>{movieData.Year}</Text></Text>            
          <Text style={styles.contentBoldText}>Genre: <Text style={styles.contentText}>{movieData.Genre}</Text></Text>            
          <Text style={styles.contentBoldText}>Duration: <Text style={styles.contentText}>{movieData.Runtime}</Text></Text>            
          <Rating
            startingValue={movieData.imdbRating}
            ratingCount={10}
            imageSize={30}
            showRating
            ratingBackgroundColor={'red'}
            readonly
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.principalArea}>
      <View style={styles.imageArea}>
        <Image
          style={styles.image}
          source={{
            uri: obj.Poster,
          }}
        />     
      </View>
      <View style={styles.contentArea}>
        <View style={styles.contentAreaTitle}>
          <Text style={styles.contentTitle}>{obj.Title}</Text>      
        </View>
        <View style={styles.contentAreaTitle}>
          <Text style={styles.contentBoldText}>Year: <Text style={styles.contentText}>{obj.Year}</Text></Text>            
          <Text style={styles.contentBoldText}>Type: <Text style={styles.contentText}>{obj.Type}</Text></Text>            
        </View>
        <View style={styles.contentAreaButtons}>
          <SeeButton style={styles.contentButtons} />
        </View>
        <View>
          <Overlay 
            isVisible={visible} 
            onBackdropPress={() => {toggleOverlay()}}
            overlayStyle={styles.overlay}
          >
            <ImageBackground source={{ uri: obj.Poster }} style={styles.overlayBackgroudImage}>
              <Modal/>
            </ImageBackground>
          </Overlay>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  principalArea: {
    width: '100%',
    minHeight: 200,
    flexDirection: 'row',
    padding: 10,
  },
  imageArea: {
    flex: 4,
    paddingHorizontal: 5,
    maxWidth: '40%'
  },
  image: {
    flex: 1
  },
  contentArea: {
    flex: 5,
    padding: 15,
  },
  contentAreaTitle: {
    paddingBottom: 15
  },
  contentTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  contentBoldText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal'
  },
  contentAreaButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  contentButtons: {
    margin: 5,
  },
  overlay: {
    backgroundColor: 'black',
    height: '85%',
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
    backgroundColor: 'black',
    color: 'white',
  },
  modalContentAreaTitle: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 15
  },
  modalContentTitle: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
});

export default CardApp;
