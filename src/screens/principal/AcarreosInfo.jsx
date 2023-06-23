import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function AcarreoInfoScreen() {
    return (
        <View style={styles.container}>
            <Text>Aquí puedes ver toda la información de tu acarreo!</Text>
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
