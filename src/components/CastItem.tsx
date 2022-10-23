import React from 'react';
import {Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {colores} from '../theme/appTheme';

interface CastItemProps {
  actor: Cast;
}

export const CastItem = ({actor}: CastItemProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.profileImg} />}
      <View style={styles.actorInfo}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.subtitle}>{actor.character}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colores.background,
    borderRadius: 10,
    height:50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 9,
    marginLeft:20,
    paddingRight:15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#878787',
  },
});
