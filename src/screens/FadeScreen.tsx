import React, {useEffect, useRef} from 'react';
import {Animated, Button, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useFade} from '../hooks/useFade';
import {colores} from '../theme/appTheme';

interface FadeScreenProps {
  prop: string;
}

export const FadeScreen = (props: FadeScreenProps) => {
    
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colores.loading,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: colores.primary,
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity,
        }}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};
