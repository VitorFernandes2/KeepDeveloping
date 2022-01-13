import React from "react";
import { Text, Image, StyleSheet, View, StatusBar } from "react-native";
import { baseColors } from "../styles/colors";

const InformationScreen = ({ navigation }) => {

    return (
        <View style={styles.containerMain}>
            <StatusBar backgroundColor={baseColors.primary} barStyle='dark-content'/>
            <View style={styles.containerText}>
                <Text style={[styles.bodyText, {paddingBottom: 10, textAlign: "center"}]}>Desenvolvido para MDS por:</Text>
                <Text style={styles.bodyText}>Emanuel Ferreira</Text>
                <Text style={styles.bodyText}>Hugo Ferreira</Text>
                <Text style={styles.bodyText}>Leandro José</Text>
                <Text style={styles.bodyText}>Rui Neves</Text>
                <Text style={styles.bodyText}>Vitor Fernandes</Text>
            </View>
            <View style={styles.containerImage}>
                <Image source={require("../assets/home_img.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
      padding: 26,
      backgroundColor: baseColors.primary,
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    },
    containerText: {
        flex: 3,
        padding: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    containerImage: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50
    },
    titleText:{
        paddingTop: 2,
        fontSize: 26
    },
    bodyText: {
        padding: 8,
        fontSize: 26
      },
    bottomText: {
        color: baseColors.secondary,
        paddingBottom: 10,
        fontSize: 30,
        alignItems: "center"
    }
  });

  export default InformationScreen;