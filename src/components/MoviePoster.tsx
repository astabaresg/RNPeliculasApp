import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 460, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen' as never, movie as never)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom:20,
        paddingHorizontal:7,
      }}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{
            uri,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },

  imgContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
  },
});
