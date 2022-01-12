import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { baseColors } from "../styles/colors";

const DifficultyBadge = (props) => {
  const { name, greenStars } = props;
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Quiz", { title: name });
      }}
    >
      <View style={styles.container}>
        <View style={styles.triangleShape} />
        <View style={styles.contentContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              alignContent: "center",
            }}
          >
            {new Array(3).fill().map((e, i) => {
              return i < greenStars ? (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  style={{ color: baseColors.yellow, marginRight: 5 }}
                />
              ) : (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  style={{ marginRight: 5 }}
                />
              );
            })}
          </View>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignSelf: "center",
  },
  triangleShape: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 190,
    borderRightWidth: 100,
    borderBottomWidth: 0,
    borderLeftWidth: 100,
    borderTopColor: "#1AA7EC",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  contentContainer: {
    position: "absolute",
    alignSelf: "center",
    alignContent: "center",
    marginTop: 25,
  },
  text: {
    color: "#000",
    zIndex: 5,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
  },
});

export default DifficultyBadge;
