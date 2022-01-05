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
        borderRadius: 50,
        flexDirection: 'row',
        padding: 6,
        width: '75%'
    },
    text:{
        color: "#fff",
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    }
})

export default FullButton;
