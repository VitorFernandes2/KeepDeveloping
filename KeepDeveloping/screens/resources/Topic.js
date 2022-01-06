import React, { useState } from "react";
import { Alert, Text, Image, StyleSheet, View } from "react-native";
import FullButton from "../../components/FullButton";
import TransparentButton from "../../components/TransparentButton";
import Page from "./Page"

const Topic = ({ name, content }) => {

    const [componentEnable, setComponentEnable] = useState(false);

    function resourceClick(content) {
      Alert.alert(content);
    }

    function toggleComponent() {
        // console(component);
        setComponentEnable(!componentEnable)
    }
  
    return (
    <View style={styles.containerMain}>
        <View style={styles.resourcesContainer}>
            <FullButton clicked={() => toggleComponent()} txt={name} />
        </View>
        
        { componentEnable && 
        <>
        <View>
            <Page content={content}/>
        </View>
        <View>
            <Page content={content}/>
        </View>
        </>
        }
    </View>
    );
  };

  

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 26,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  resourcesContainer: {

  }
});

export default Topic;