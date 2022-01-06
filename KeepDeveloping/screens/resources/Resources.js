import React from "react";
import { Alert, Text, Image, StyleSheet, View, ScrollView } from "react-native";
import FullButton from "../../components/FullButton";
import TransparentButton from "../../components/TransparentButton";
import Topic from "./Topic"

const ResourcesScreen = ({ navigation }) => {
    function resourceClick(content) {
      Alert.alert(content);
    }
  
    return (
    <View style={styles.containerMain}>
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
    padding: 26,
    backgroundColor: "#7eab84",
    flex: 10,
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "blue"
  },
  resourcesContainer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 8
  }
});

export default ResourcesScreen;