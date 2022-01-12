import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';
import { baseColors } from '../styles/colors';


const FullButton = ({txt, clicked}) => {
    return (
        <Pressable style={styles.bt} onPress={clicked}>
            <Text style={styles.text}>{txt}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    bt:{
        backgroundColor: baseColors.secondary,
        borderRadius: 50,
        flexDirection: 'row',
        padding: 18,
        width: '75%'
    },
    text:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    }
})

export default FullButton;
