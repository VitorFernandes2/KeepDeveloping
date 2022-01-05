import React from "react";
import { Alert, Text, Image, StyleSheet, View } from "react-native";
import FullButton from "../components/FullButton";
import TransparentButton from "../components/TransparentButton";
import { useFonts } from 'expo-font';

const HomeScreen = ({ navigation }) => {
  function click() {
    Alert.alert("Click");
  }

  const [loaded] = useFonts({
    Agile: require('../assets/fonts/library-3-amsoft.otf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerImage}>
        <Image source={require("../assets/home_img.png")} />
      </View>
      <View style={styles.containerPhrase}>
        <Text style={styles.textSlogan}>Let's Agile!</Text>
      </View>
      <View style={styles.containerButtons}>
        <FullButton clicked={click} txt="Jogar" />
        <FullButton clicked={click} txt="Documentação" />
        <TransparentButton clicked={()=>navigation.navigate("InformationScreen")} txt="Informação"/>
        <TransparentButton clicked={() => navigation.navigate('',{})} txt="Informação" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    padding: 26,
    backgroundColor: "#7eab84",
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
    marginTop: 60
  },
  textSlogan:{
    fontFamily: 'Agile',
    fontSize: 40,
    rotation: -25
  }
});

export default HomeScreen;
