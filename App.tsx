import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';
import { NotificationListener, requestUserPermission } from './src/helpers/pushNotificationManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const AppState = ({children}:any) =>{
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, [])
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>
      </AppState>
    </NavigationContainer>
  );
};

export default App;
