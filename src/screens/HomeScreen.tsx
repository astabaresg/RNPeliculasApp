import React, { useContext, useEffect } from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {appTheme, colores} from '../theme/appTheme';
import {GradientBackground} from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import messaging from '@react-native-firebase/messaging';


const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const { setMainColors } = useContext(GradientContext)

  const getPosterColors = async (index:number) =>{
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = '#093A3E', secondary = '#3AAFB9'] = await getImageColors(uri);
    setMainColors({primary, secondary});
    
  }

  useEffect(() => {
    if(nowPlaying.length > 0){
      getPosterColors(0);
    }
  }, [nowPlaying])
  

  if (isLoading) {
    return (
      <View style={appTheme.loadingIndicator}>
        <ActivityIndicator color={colores.loading} size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View
          style={{marginTop: top, marginBottom: bottom, alignItems: 'center'}}>
          {/* Carousel principal */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              // sliderWidth={windowWidth}
              mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
              }}
              width={300}
              loop={false}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas Populares */}

          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
