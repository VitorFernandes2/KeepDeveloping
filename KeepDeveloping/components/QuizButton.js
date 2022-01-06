import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const QuizButton = (props) => {
  return (
    <Pressable style={styles.bt} onPress={() => console.log("action")}>
      <Text style={styles.text}>A: Texto de carater temporario</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bt: {
    backgroundColor: "transparent",
    borderColor: "#0F5371",
    borderWidth: 2,
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    marginTop: 16,
    padding: 16,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#0F5371",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default QuizButton;
