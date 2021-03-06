import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './global/theme';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import {FilterProvider} from './hooks/filter'

import Login from './src/screens/Login';

import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading />
  }else{
    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
          translucent
        />
        <FilterProvider>
          <Routes />
        </FilterProvider>
      </ThemeProvider>
    );
  }
}