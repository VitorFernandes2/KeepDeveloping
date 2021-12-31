import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';


const FullButton = ({txt, clicked}) => {
    return (
        <Pressable style={styles.bt} onPress={clicked}>
            <Text style={styles.text}>{txt}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    bt:{
        backgroundColor: "#43136e",
        borderRadius: 10,
        width: "75%",
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 16,
        padding: 6
    },
    text:{
        color: "#fff",
        fontSize: 20
    }
})

export default FullButton;
