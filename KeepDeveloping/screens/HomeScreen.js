import React from "react";
import { Alert, Text, Image, StyleSheet, View } from "react-native";
import FullButton from "../components/FullButton";
import TransparentButton from "../components/TransparentButton";

const HomeScreen = ({ navigation }) => {
  function click() {
    Alert.alert("Click");
  }

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerImage}>
        <Image source={require("../assets/home_img.png")} />
      </View>
      <View style={styles.containerPhrase}>
        <Text>Let's Agile!</Text>
      </View>
      <View style={styles.containerButtons}>
        <FullButton clicked={click} txt="Jogar" />
        <FullButton clicked={click} txt="Documentação" />
        <TransparentButton clicked={click} txt="Informação" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    padding: 26,
    backgroundColor: "#7eab84",
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerImage: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerPhrase: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerButtons: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  }
});

export default HomeScreen;
