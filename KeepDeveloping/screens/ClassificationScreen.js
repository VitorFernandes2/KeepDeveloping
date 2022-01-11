import React from "react";
import { View, Image, StyleSheet, ScrollView, Text } from "react-native";
import { baseColors } from "../styles/colors";

const ClassificationScreen = () => {
  return (
    <View style={styles.containerMain}>
      <Image
        style={{
          maxWidth: "100%",
          maxHeight: 250,
          borderRadius: 10,
          resizeMode: "contain",
        }}
        source={require("../assets/images/classification.png")}
      />
      <ScrollView>
        <View style={styles.boardContainer}>
          <View style={[{...styles.scoreBoardLine, borderTopStartRadius: 20, borderTopEndRadius: 20}]}>
            <View>
              <Text style={styles.font}>1º - </Text>
            </View>
            <View style={{paddingLeft: 15}}>
              <Text style={styles.font}>12345 Pontos</Text>
            </View>
          </View>
          <View style={[{...styles.scoreBoardLine, backgroundColor: '#59A8D9'}]}>
            <View>
              <Text style={styles.font}>2º - </Text>
            </View>
            <View style={{paddingLeft: 15}}>
              <Text style={styles.font}>12344 Pontos</Text>
            </View>
          </View>
          <View style={[{...styles.scoreBoardLine, borderBottomStartRadius: 20, borderBottomEndRadius: 20}]}>
            <View>
              <Text style={styles.font}>3º - </Text>
            </View>
            <View style={{paddingLeft: 15}}>
              <Text style={styles.font}>12343 Pontos</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: baseColors.primary,
    flex: 1,
    justifyContent: "space-evenly",
    width: '100%'
  },
  boardContainer: {
    flex: 1,
    marginHorizontal: 10,
    alignContent: "center",
    alignItems: "center"
  },
  scoreBoardLine: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0367A6",
    width: "100%",
    justifyContent: 'center'
  },
  font: {
    fontSize: 16,
    lineHeight: 45,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default ClassificationScreen;
