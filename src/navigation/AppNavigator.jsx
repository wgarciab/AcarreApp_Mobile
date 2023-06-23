import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import {createStackNavigator} from "@react-navigation/stack";

//Screens
import HomeScreen from "../screens/principal/Home";
import SearchAcarreoScreen from "../screens/principal/SearchAcarreo";
import AcarreoInfoScreen from "../screens/principal/AcarreosInfo";
import SignInScreen from "../screens/beginning/SignIn";
import SignupScreen from "../screens/beginning/SingUp";

const Stack = createStackNavigator();
const TabBarNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>
            <TabBarNavigator.Screen name="Inicio" component={HomeScreen} />
            <TabBarNavigator.Screen
                name="Contrata"
                component={SearchAcarreoScreen}
            />
            <TabBarNavigator.Screen
                name="Seguimiento"
                component={AcarreoInfoScreen}
            />
        </TabBarNavigator.Navigator>
    );
};

function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Principal" component={TabNavigator} />
        </Stack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
