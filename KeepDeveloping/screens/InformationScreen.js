import React from "react";
import { Text, Image, StyleSheet, View, ScrollView } from "react-native";

const InformationScreen = ({ navigation }) => {

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerText}>
                <Text style={[styles.bodyText, {paddingBottom: 10}]}>Desenvolvido para MDS por:</Text>
                <View style={styles.namesContainer}>
                    <Text style={styles.bodyText}>Emanuel Ferreira</Text>
                    <Text style={styles.bodyText}>Hugo Ferreira</Text>
                    <Text style={styles.bodyText}>Leandro José</Text>
                    <Text style={styles.bodyText}>Rui Neves</Text>
                    <Text style={styles.bodyText}>Vitor Fernandes</Text>
                </View>
            </View>
            <View style={styles.containerImage}>
                <Text style={styles.bottomText}>Obrigado por usar:</Text>
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
        paddingBottom: 10,
        fontSize: 30,
        alignItems: "center"
    }
  });

  export default InformationScreen;