import React, { useState } from "react";
import { Alert, Text, Image, StyleSheet, View, Button } from "react-native";
import FullButton from "../../components/FullButton";
import TransparentButton from "../../components/TransparentButton";

const Page = ({ content }) => {

    const [componentEnable, setComponentEnable] = useState(false);

    function toggleComponent() {
        setComponentEnable(!componentEnable)
    }

    return (
        <View style={styles.containerMain}>
            <View>
                <TransparentButton clicked={toggleComponent} txt={content} />
            </View>

            {componentEnable && (
                <View style={{marginTop: 16}}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.</Text>
                </View>
                )} 
        </View>
    );
};



const styles = StyleSheet.create({
    containerMain: {
        paddingTop: 26,
        alignItems: "center",
        width: "100%"
    }
});

export default Page;