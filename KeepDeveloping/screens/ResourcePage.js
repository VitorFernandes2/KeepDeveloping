import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Text,
  Image,
} from "react-native";
import Video from "react-native-video";
import { baseColors } from "../styles/colors";

const ResourcePage = ({ navigation, route }) => {
  // aux to get content from route.params
  const [content, setContent] = useState({});

  // image resource
  const agile = require("../assets/images/Agile.png");
  const agilePlanning = require("../assets/images/Agile_planning_onion.png");
  const scrum = require("../assets/images/Scrum.png");

  // video resource
  const whatIsAgileVideo = require("../assets/video/What_Is_Scrum.mp4");

  // set Screen Stack Navigator title
  React.useEffect(() => {
    if (route.params?.content) {
      setContent(route.params?.content);
      navigation.setOptions({ title: route.params?.content[0].value });
    }
  }, [route.params?.content]);

  // switcher of component (Texto/Imagem/Video)
  function switcher() {
    const content = route.params?.content;
    let components = [];
    content.map((prop, key) => {
      if (key != 0) {
        switch (prop.styles.toLowerCase()) {
          case "texto":
            components = [
              ...components,
              <View>
                <Text style={styles.text}>{prop.value}</Text>
              </View>,
            ];
            break;
          case "imagem":
            components = [
              ...components,
              <View>
                <Image
                  style={styles.image}
                  resizeMode="contain"
                  source={
                    prop.value == "Agile"
                      ? agile
                      : prop.value == "Agile_planning"
                      ? agilePlanning
                      : scrum
                  }
                />
              </View>,
            ];
            break;
          case "video":
            // components = [...components, <Video style={styles.video} source={whatIsAgileVideo} controls={true} />]
            break;
        }
      }
    });
    return components;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <StatusBar backgroundColor={baseColors.primary} barStyle="dark-content" />
      <View style={styles.containerMain}>{switcher()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: baseColors.primary,
    alignItems: "center",
  },
  containerMain: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 25,
  },
  text: {
    textAlign: "justify",
    marginTop: 10,
    fontSize: 22,
  },
  image: {
    width: "100%",
    maxHeight: 200,
    maxWidth: 800,
    minWidth: 380,
  },
  video: {},
});

export default ResourcePage;
