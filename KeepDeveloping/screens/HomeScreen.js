import React from 'react';
import { Alert, Text, Image, StyleSheet, View} from 'react-native';
import FullButton from '../components/FullButton';
import TransparentButton from '../components/TransparentButton';


const HomeScreen = ({navigation}) => {

    function click(){
        Alert.alert("Click")
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/home_img.png')}/>
            <FullButton clicked={click} txt="Jogar"/>
            <FullButton clicked={click} txt="Documentação"/>
            <TransparentButton clicked={click} txt="Informação"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 26,
        backgroundColor: "#7eab84",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        marginBottom: 20
    }
})

export default HomeScreen;