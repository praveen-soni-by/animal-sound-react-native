import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import LottieView from "lottie-react-native";

export default Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        style={{
          flex: 1,
          backgroundColor: "#D84315",
        }}
        source={require("../../assets/6732-animal.json")}
      />
      <View style={styles.titleContainer}>
        <Text style={[styles.text, { fontSize: 30 }]}>Animal Sounds</Text>
      </View>
      <TouchableOpacity style={styles.container} onPress={props.play}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Start</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 80,
  },
  buttonContainer: {
    backgroundColor: "#DD2C00",
    height: 60,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 5,
  },
  titleContainer: {
    backgroundColor: "#DD2C00",
    height: 60,
    alignSelf: "center",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
  },

  text: {
    color: "white",
    fontSize: 24,
  },
});
