import React from "react";
import {View, StyleSheet, TextInput} from "react-native";
import Colors from "../constants/Colors";

const Input = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        borderColor: Colors.border,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    },
    input: {
        paddingHorizontal: 10,
    }
});

export default Input;
