import React from "react";
import { Image, StyleSheet, Text, View, StatusBar } from "react-native";
import QuizButton from "../components/QuizButton";
import { baseColors } from "../styles/colors";

const QuizScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={baseColors.primary} barStyle='dark-content'/>
      <View style={{ marginHorizontal: 16, marginTop: 30 }}>
        <View style={{ marginBottom: 16, alignSelf: "center" }}>
          <Text style={styles.text}>
            P.2 Existem dois tipos de requisitos:{" "}
          </Text>
        </View>
        <Image
          style={{ maxWidth: "100%", maxHeight: 250, borderRadius: 10 }}
          source={require("../assets/images/po.jpg")}
        />
        <QuizButton isWrong={true} text={"A: Texto de carater temporario"} />
        <QuizButton isWrong={true} text={"B: Texto de carater temporario"} />
        <QuizButton isWrong={true} text={"C: Texto de carater temporario"} />
        <QuizButton isWrong={false} text={"D: Texto de carater temporario"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseColors.primary,
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    color: baseColors.secondary
  },
});

export default QuizScreen;
