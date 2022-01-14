import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import DifficultyBadge from "../components/DifficultyBadge";
import { baseColors } from "../styles/colors";

const DifficultiesScreen = (props) => {
  const easy = require("../questions/easy.json");
  const medium = require("../questions/medium.json");
  const hard = require("../questions/hard.json");

  const randomOrderGenerator = (arr) => {
    let randomOrder = [];
    for (let i = 0; i < arr.length; i++) {
      let random_num = Math.floor(Math.random() * arr.length);
      while (randomOrder.includes(random_num)) {
        random_num = Math.floor(Math.random() * arr.length);
      }
      randomOrder.push(random_num);
    }
    return randomOrder;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={baseColors.primary} barStyle="dark-content" />
      <View>
        <DifficultyBadge
          name={"Easy"}
          greenStars={1}
          questions={easy}
          randomOrder={randomOrderGenerator(easy)}
        />
      </View>
      <View>
        <DifficultyBadge
          name={"Medium"}
          greenStars={2}
          questions={medium}
          randomOrder={randomOrderGenerator(medium)}
        />
      </View>
      <View>
        <DifficultyBadge
          name={"Hard"}
          greenStars={3}
          questions={hard}
          randomOrder={randomOrderGenerator(hard)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseColors.primary,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default DifficultiesScreen;
