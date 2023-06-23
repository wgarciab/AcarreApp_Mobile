import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Input from "../../components/Input";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import CustomTitle from "../../components/CustomTitle";
const logo = require("../../../assets/acarreapp_icon.png");

export default function SignupScreen({navigation}) {
    const [usernames, setUsernames] = useState("");
    const [documentId, setDocumentId] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const onPressCreateAccountButton = () => {
        navigation.navigate("Principal");
    };
    
    const onPressAlreadyHaveAnAccountButton = () => {
        navigation.navigate("Signin");
    };

    return (
        <View style={styles.container}>
            <CustomTitle title="Crear una cuenta" />
            <View style={styles.getData}>
                <Input
                    placeholder="Nombre completo"
                    value={usernames}
                    setValue={setUsernames}
                />
                <Input
                    placeholder="Nro. Documento"
                    value={documentId}
                    setValue={setDocumentId}
                />
                <Input placeholder="Correo" value={email} setValue={setEmail} />
                <Input
                    placeholder="Teléfono"
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                />
                <Input
                    placeholder="Contraseña"
                    value={password}
                    setValue={setPassword}
                />
                <Input
                    placeholder="Confirmar Contraseña"
                    value={passwordConfirmation}
                    setValue={setPasswordConfirmation}
                />
            </View>
            <View style={styles.createAccountButton}>
                <CustomButton
                    onPress={onPressCreateAccountButton}
                    name="Crear cuenta"
                    type="PRIMARY"
                />
                <CustomButton
                    onPress={onPressAlreadyHaveAnAccountButton}
                    name="Ya tienes una cuenta? Ingresa"
                    type="TERTIARY"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
        alignItems: "center",
    },
    createAccountButton: {
        width: "100%",
        marginTop: 32,
    },
    getData: {
        width: "100%",
        marginTop: 32,
    }
});
