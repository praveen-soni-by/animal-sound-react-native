import { Audio } from "expo-av";
import LottieView from "lottie-react-native";
import React, { useRef, useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import data from "../data/data";
import Card from "./ui/Card";

const colors = [
  "#d81b60",
  "#2196f3",
  "#ff6f00",
  "#ffa726",
  "#009688",
  "#388e3c",
  "#673ab7",
  "#d32f2f",
  "#bdbdbd",
  "#fdd835",
  "#0097a7",
];

export default Animals = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [sound, setSound] = React.useState();

  async function playWinnerSound(animalSound) {
    const { sound } = await Audio.Sound.createAsync(animalSound);
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId
        ? colors[Math.floor(Math.random() * 10) + 1]
        : "#ffffff";

    return (
      <Card
        style={styles.card}
        onPress={() => {
          setSelectedId(item.id);
          playWinnerSound(item.sound);
        }}
        backgroundColor={backgroundColor}
      >
        <LottieView
          style={{
            height: 150,
            flex: 1,
          }}
          source={item.image}
        />
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.row}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    justifyContent: "space-around",
    flex: 1,
  },
  card: {
    height: 120,
  },
});
