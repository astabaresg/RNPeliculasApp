import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {appTheme, colores} from '../theme/appTheme';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={appTheme.loadingIndicator}>
        <ActivityIndicator color={colores.loading} size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top, marginBottom:bottom, alignItems:'center'}}>
        {/* Carousel principal */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            // sliderWidth={windowWidth}
            mode='parallax'
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            width={300}
            loop={false}
          />
        </View>

        {/* Peliculas Populares */}
        
        <HorizontalSlider title='Popular' movies={popular}/>
        <HorizontalSlider title='Top Rated' movies={topRated}/>
        <HorizontalSlider title='Upcoming' movies={upcoming}/>
      </View>
    </ScrollView>
  );
};
