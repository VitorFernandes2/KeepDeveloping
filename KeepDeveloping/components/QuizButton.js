import { React, useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { baseColors } from "../styles/colors";

const QuizButton = (props) => {
  const { isWrong, text } = props;
  const [value, setValue] = useState("none");

  return (
    <Pressable
      style={
        value === "none"
          ? styles.bt
          : value === "wrong"
          ? styles.btRed
          : styles.btGreen
      }
      onPress={() => {
        if (value === 'none') {
          setValue(isWrong ? 'wrong' : 'right');
        }
      }}
    >
      <Text style={value === "none" ? styles.text : styles.textOther}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bt: {
    backgroundColor: "transparent",
    borderColor: baseColors.secondary,
    borderWidth: 2,
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    marginTop: 16,
    padding: 16,
    alignContent: "center",
    alignItems: "center",
  },
  btRed: {
    backgroundColor: baseColors.red,
    borderColor: baseColors.red,
    borderWidth: 2,
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    marginTop: 16,
    padding: 16,
    alignContent: "center",
    alignItems: "center",
  },
  btGreen: {
    backgroundColor: baseColors.green,
    borderColor: baseColors.green,
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
    color: baseColors.secondary,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  textOther: {
    color: baseColors.primary,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default QuizButton;
