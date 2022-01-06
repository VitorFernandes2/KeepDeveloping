import React from "react";
import { StyleSheet, View } from "react-native";
import DifficultyBadge from "../components/DifficultyBadge";

const DifficultiesScreen = (props) => {
  return (
    <View style={styles.container}>
        <View style={{marginBottom: 45}}>
            <DifficultyBadge name={"Fácil"} greenStars={1}/>
        </View>
        <View style={{marginBottom: 45}}>
            <DifficultyBadge name={"Médio"} greenStars={2}/>
        </View>
        <View style={{marginBottom: 45}}>
            <DifficultyBadge name={"Dificil"} greenStars={3}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#7eab84',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default DifficultiesScreen;
