import React from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { baseColors } from "../styles/colors";
import Topic from "../components/resources/Topic";

const ResourcesScreen = ({ navigation }) => {
  const resourcesData = require("../assets/resources/resources.json");
  const keys = Object.keys(resourcesData);

  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={baseColors.primary} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.resourcesContainer}>
          {keys.map((prop) => {
            const objectData = resourcesData[prop];
            return (
              <Topic
                name={prop}
                topicData={objectData}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: baseColors.primary,
    flex: 10,
    flexDirection: "column",
  },
  resourcesContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    marginBottom: 25,
  },
});

export default ResourcesScreen;
