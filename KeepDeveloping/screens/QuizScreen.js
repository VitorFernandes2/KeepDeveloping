import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import QuizButton from "../components/QuizButton";

const QuizScreen = (props) => {
  return (
    <View style={styles.container}>
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
        <QuizButton />
        <QuizButton />
        <QuizButton />
        <QuizButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7eab84",
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    color: '#0F5371'
  },
});

export default QuizScreen;
