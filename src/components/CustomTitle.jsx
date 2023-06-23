import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";

const CustomTitle = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: 24,
    }
});

export default CustomTitle
