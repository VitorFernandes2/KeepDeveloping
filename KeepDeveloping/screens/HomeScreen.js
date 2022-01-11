import React from "react";
import { Alert, Text, Image, StyleSheet, View, StatusBar } from "react-native";
import FullButton from "../components/FullButton";
import TransparentButton from "../components/TransparentButton";
import { useFonts } from "expo-font";
import { baseColors } from "../styles/colors";

const HomeScreen = ({ navigation }) => {
  function click() {
    Alert.alert("Click");
  }

  const [loaded] = useFonts({
    Agile: require("../assets/fonts/library-3-amsoft.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={baseColors.primary} barStyle="dark-content" />
      <View style={styles.containerImage}>
        <Image source={require("../assets/home_img.png")} />
      </View>
      <View style={styles.containerPhrase}>
        <Text style={styles.textSlogan}>Let's Agile!</Text>
      </View>
      <View style={styles.containerButtons}>
        <FullButton clicked={() => navigation.navigate("Game")} txt="Jogar" />
        <FullButton clicked={() => navigation.navigate("Resources")} txt="Documentação"/> 
        <FullButton clicked={() => navigation.navigate("Classification")} txt="Classificação"/>
        <TransparentButton clicked={()=>navigation.navigate("Information")} txt="Sobre"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    padding: 26,
    backgroundColor: baseColors.primary,
    flex: 1,
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
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerButtons: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 60,
  },
  textSlogan: {
    fontFamily: "Agile",
    fontSize: 40,
    //rotation: -25, //deprecated
    transform: [{ rotate: "-25deg" }],
  },
});

export default HomeScreen;
