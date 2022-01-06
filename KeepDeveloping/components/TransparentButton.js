import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';

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
        borderColor: "#43136e",
        borderWidth: 1,
        width: "75%",
        flexDirection: 'row',
        padding: 18
    },
    text:{
        color: "#43136e",
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
    }
})

export default TransparentButton;