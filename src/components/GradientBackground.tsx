import React, {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);

  const {opacity, fadeIn, fadeOut} = useFade();
  useEffect(() => {
    fadeIn( () =>{
      setPrevMainColors(colors);
      fadeOut( 0 );
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, '#D1D1D1']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.6}}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#D1D1D1']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.6}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
