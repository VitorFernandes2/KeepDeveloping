import React from "react";
import { Text, Image, StyleSheet, View, ScrollView } from "react-native";

const InformationScreen = ({ navigation }) => {

    return (
        <View style={styles.containerMain}>
            <Text style={styles.titleText}>Information</Text>
            <View style={styles.containerText}>
                <Text style={[styles.bodyText, {paddingBottom: 10}]}>Developed to MDS by:</Text>
                <Text style={styles.bodyText}>Emanuel Ferreira</Text>
                <Text style={styles.bodyText}>Hugo Ferreira</Text>
                <Text style={styles.bodyText}>Leandro José</Text>
                <Text style={styles.bodyText}>Rui Neves</Text>
                <Text style={styles.bodyText}>Vitor Fernandes</Text>
            </View>
            <View style={styles.containerImage}>
                <Text style={styles.bottomText}>Thanks for using:</Text>
                <Image source={require("../assets/home_img.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
      padding: 26,
      backgroundColor: "#7eab84",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    },
    containerText: {
        flex: 8,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 13,
    },
    containerImage: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center"
    },
    titleText: {
        paddingTop: 20,
        fontSize: 40
      },
    bodyText: {
        paddingTop: 2,
        fontSize: 30
      },
    bottomText: {
        paddingBottom: 10,
        fontSize: 40,
        alignItems: "center"
    }
  });

  export default InformationScreen;