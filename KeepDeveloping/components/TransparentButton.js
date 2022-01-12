import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';
import { baseColors } from '../styles/colors';

const TransparentButton = ({txt, clicked}) => {


    return (
        <Pressable style={styles.bt} onPress={clicked}>
            <Text style={styles.text}>{txt}</Text>
        </Pressable>
    );

}


const styles = StyleSheet.create({
    bt:{
        backgroundColor: "#00000000",
        borderRadius: 50,
        borderColor: baseColors.secondary,
        borderWidth: 1,
        width: "75%",
        flexDirection: 'row',
        padding: 18
    },
    text:{
        color: baseColors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
    }
})

export default TransparentButton;