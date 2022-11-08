import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';
import messaging from '@react-native-firebase/messaging';

const AppState = ({children}:any) =>{
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  useEffect(() => {
    const normalSubscriber = messaging().onMessage(async message =>{
      console.log('Nuevo mensaje', JSON.stringify(message));
    });

    const topicSubscriber = messaging().subscribeToTopic('terror').then(()=>{
      console.log('Sucrito al tema de terror');
    })

    const topicSubscriber2 = messaging().subscribeToTopic('accion').then(()=>{
      console.log('Sucrito al tema de accion');
    })

    const backgroundSubscriber = messaging().setBackgroundMessageHandler(async message =>{
      console.log('Notificación en background', message);
    })
  
    return () => {
      normalSubscriber();
    }
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
