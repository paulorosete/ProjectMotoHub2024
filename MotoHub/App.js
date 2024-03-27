import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import Header from './Shared/Header';
import { NativeBaseProvider, extendTheme } from 'native-base';
import ProductContainer from './Screens/Products/ProductContainer'

const theme = extendTheme({colors: newColorTheme});
const newColorTheme = {
  brand: {
    900: "#5B8DF6",
    800: "#ffffff",
    700: "#cccccc"
  },
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <Header />
        <ProductContainer />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
