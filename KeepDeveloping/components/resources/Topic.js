import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FullButton from "../FullButton";
import TransparentButton from "../../components/TransparentButton";

const Topic = ({ name, topicData, navigation }) => {

  const [componentEnable, setComponentEnable] = useState(false);

  function toggleComponent() {
    setComponentEnable(!componentEnable)
  }

  function openPage(content) {
    navigation.navigate("ResourcePage", {content});
  }

  const pagesKeys = Object.keys(topicData);

  return (
    <View style={styles.containerMain}>
      <View style={styles.resourcesContainer}>
        <FullButton clicked={() => toggleComponent()} txt={name} />
      </View>

      {componentEnable &&
        pagesKeys.map((pageName) => {
          return <View style={styles.page}>
            <TransparentButton clicked={() => openPage(topicData[pageName].content)} txt={pageName} />
          </View>
        })
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
  page: {
    paddingTop: 26,
    alignItems: "center",
    width: "100%"
  }
});

export default Topic;