import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Card = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          ...styles.card,
          ...props.style,
          backgroundColor: props.backgroundColor,
        }}
      >
        {props.children}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.26,
    marginBottom:10,
    marginTop:10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Card;
