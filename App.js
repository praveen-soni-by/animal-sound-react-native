import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Platform, StatusBar } from "react-native";
import Home from "./src/components/Home";
import Animals from "./src/components/Animals";

const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function App() {
  const [play, setPlay] = useState(false);
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
