import React from "react";
import { Alert, Text, Image, StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { baseColors } from "../../styles/colors";
import Topic from "./Topic"

const ResourcesScreen = ({ navigation }) => {
    function resourceClick(content) {
      Alert.alert(content);
    }
  
    return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={baseColors.primary} barStyle="dark-content" />
        <ScrollView >
        <View style={styles.resourcesContainer}>
             <Topic name="Gestão" content="Equipa"/> 
             {/* TODO: Changes this for the topic name in the json file */}
            <Topic name="Controlo" content="Reuniões"/>
        </View>
        </ScrollView>
    </View>
    );
  };

  

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: baseColors.primary,
    flex: 10,
    flexDirection: "column"
  },
  resourcesContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    marginBottom: 25
  }
});

export default ResourcesScreen;