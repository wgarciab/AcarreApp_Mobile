import React from "react";
import {StyleSheet, Text, Pressable} from "react-native";
import Colors from "../constants/Colors";

const CustomButton = ({onPress, name, type}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{name}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 5,
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
    },
    container_PRIMARY: {
        backgroundColor: Colors.secondary,
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    container_TERTIARY: {
        borderColor: Colors.primary,
    },
    text: {
        fontWeight: "bold",
    },
    text_PRIMARY: {
        color: "white",
    },
    text_TERTIARY: {
        color: Colors.primary,
    },
});

export default CustomButton;
