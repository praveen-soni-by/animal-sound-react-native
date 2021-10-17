import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Platform, StatusBar } from "react-native";
import Home from "./src/components/Home";
import Animals from "./src/components/Animals";
import { useFonts } from 'expo-font';

const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function App() {
  const [play, setPlay] = useState(false);

  const [loaded] = useFonts({
    Lobster: require('./assets/fonts/Lobster-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: paddingTop }}>
      {play ? (
        <Animals />
      ) : (
        <Home play={() => setPlay(true)} />
      )}
    </SafeAreaView>
  );
}
