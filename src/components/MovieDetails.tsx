import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    const budget = new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' }).format(movieFull.budget);
    const {bottom} = useSafeAreaInsets();

  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={styles.textRating}>{movieFull.vote_average}</Text>
          <Text style={styles.textRating}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={styles.title}>
            Historia
        </Text>
        <Text style={styles.textSections} >{movieFull.overview}</Text>
        {/* Presupuesto */}
        <Text style={styles.title}>
            Presupuesto
        </Text>
        <Text style={styles.textSections} >{budget}</Text>
      </View>

      {/* Casting */}
      <View style={{marginTop:10, marginBottom:bottom}} >
        <Text style={{...styles.title, marginHorizontal:20}} >Actores</Text>
        <FlatList
            data={ cast }
            keyExtractor={ (item) => item.id.toString() }
            renderItem ={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop:10, height:70}}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textRating: {
    marginLeft: 5,
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  textSections:{
    fontSize:16,
    marginTop:8
  },
});
