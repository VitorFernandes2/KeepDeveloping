import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import DifficultyBadge from "../components/DifficultyBadge";
import { baseColors } from "../styles/colors";

const DifficultiesScreen = (props) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={baseColors.primary} barStyle='dark-content'/>
        <View>
            <DifficultyBadge name={"Fácil"} greenStars={1}/>
        </View>
        <View>
            <DifficultyBadge name={"Médio"} greenStars={2}/>
        </View>
        <View>
            <DifficultyBadge name={"Dificil"} greenStars={3}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: baseColors.primary,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default DifficultiesScreen;
