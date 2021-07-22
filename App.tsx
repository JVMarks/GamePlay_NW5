import React from 'react';
import { StatusBar, LogBox } from 'react-native';

/*Fontes*/
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

/*PLUGS APIS*/
import AppLoading from 'expo-app-loading';

/*components*/
import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}

//npm cache clean -f 
//expo r -c   
//rm -rf .expo 
//expo start -c --android 