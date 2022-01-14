import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, ScrollView, Text } from "react-native";
import { baseColors } from "../styles/colors";
import { clean, getClassifications } from "../API/Storage";

const ClassificationScreen = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    let d = await getClassifications();
    setData(d);
  }, []);

  function classList() {
    let es = [];

    for (let i = 0; i < data.length; i++) {
      let str = "@KeepDeveloping_C" + (i + 1).toString();

      if (data[i][str] == null) continue;

      if (data[i][str].score == undefined || data[i][str].level == undefined)
        continue;

      let l = data[i][str].level;
      let ls = l == 1 ? "Easy" : l == 2 ? "Medium" : "Hard";
      es = [
        ...es,
        <View
          style={[
            {
              ...styles.scoreBoardLine,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              marginBottom: 20,
            },
          ]}
        >
          <View>
            <Text style={styles.font}>{i + 1}º - </Text>
          </View>
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.font}>
              {data[i][str].score} | {ls}
            </Text>
          </View>
        </View>,
      ];
    }
    return es;
  }

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
        {data != [] && <View style={styles.boardContainer}>{classList()}</View>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: baseColors.primary,
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%",
  },
  boardContainer: {
    flex: 1,
    marginHorizontal: 10,
    alignContent: "center",
    alignItems: "center",
  },
  scoreBoardLine: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0367A6",
    width: "100%",
    justifyContent: "center",
  },
  font: {
    fontSize: 16,
    lineHeight: 45,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ClassificationScreen;
