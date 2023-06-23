import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, Animated} from "react-native";
import * as Haptics from "expo-haptics";
import {Ionicons} from "@expo/vector-icons";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";

const TabBar = ({state, navigation}) => {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const focused = state.index === index;
                const itemColor = focused ? Colors.focused : Colors.unFocused;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!focused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                        Haptics.selectionAsync();
                    }
                };

                let iconName;
                switch (route.name) {
                    case "Inicio":
                        iconName = "home";
                        break;
                    case "Contrata":
                        iconName = "location";
                        break;
                    case "Seguimiento":
                        iconName = "map";
                        break;
                    default:
                        iconName = "person";
                        break;
                }

                const animatedValue = new Animated.Value(1);

                const onPressIn = () => {
                    Animated.spring(animatedValue, {
                        toValue: 0.9,
                        useNativeDriver: true,
                    }).start();
                };

                const onPressOut = () => {
                    Animated.spring(animatedValue, {
                        toValue: 1,
                        useNativeDriver: true,
                    }).start();
                };

                const animatedStyle = {
                    transform: [{scale: animatedValue}],
                };

                return (
                    <Animated.View
                        style={[styles.tabItem, animatedStyle]}
                        key={route.name}
                    >
                        <TouchableOpacity
                            onPress={onPress}
                            onPressIn={onPressIn}
                            onPressOut={onPressOut}
                        >
                            <View style={{alignItems: "center"}}>
                                <Ionicons
                                    name={iconName}
                                    size={20}
                                    color={itemColor}
                                    style={{marginBottom: 2}}
                                />
                                <Text
                                    style={[
                                        {color: itemColor},
                                        styles.tabBarText,
                                    ]}
                                >
                                    {route.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        height: 60,
        borderColor: "white",
        borderTopColor: Colors.border,
        borderWidth: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    tabItem: {
        width: 60,
    },
    tabBarText: {
        fontSize: 10,
        fontWeight: "700",
    },
});

export default TabBar;
