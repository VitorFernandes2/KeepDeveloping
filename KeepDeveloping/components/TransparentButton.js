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
        borderRadius: 10,
        borderColor: "#43136e",
        borderWidth: 1,
        width: "75%",
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 16,
        padding: 6
    },
    text:{
        color: "#43136e",
        fontSize: 20
    }
})

export default TransparentButton;