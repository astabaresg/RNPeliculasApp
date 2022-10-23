import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParams} from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { colores } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const {height: screenHeight} = Dimensions.get('screen');

export const DetailScreen = ({navigation,route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);
  
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder} >
            <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer} >
        <Text style={styles.subtitle} >{movie.original_title}</Text>
        <Text style={styles.title} >{movie.title}</Text>
      </View>
        {
          isLoading
            ? <ActivityIndicator size={35} color='grey'  style={{marginTop:20}}/>
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }
      
      {/* Boton para cerrar */}
      <View style={styles.backButton} >
        <TouchableOpacity
          onPress={()=> navigation.pop()}
        >
          <Icon
            color='white'
            name='chevron-back-outline'
            size={60}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder:{
    flex:1,
    overflow:'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer:{
    marginHorizontal:20,
    marginTop:20,
  },
  subtitle:{
    fontSize:16,
    color:'#878787',

  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  backButton:{
    position:'absolute',
    backgroundColor:colores.primary,
    borderRadius:100,
    zIndex:999,
    elevation:9,
    top:30,
    left:5
  },
});
