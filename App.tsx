import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './global/theme';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

import Login from './src/screens/Login';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading />
  }else{
    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );
  }
}