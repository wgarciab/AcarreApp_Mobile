import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function SearchAcarreoScreen() {
    return (
        <View style={styles.container}>
            <Text>Busca un acarreo!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
