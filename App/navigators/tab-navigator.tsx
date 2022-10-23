import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react"
import { HomeScreen } from "../screens/home";
import { ProfileScreen } from "../screens/profile";
import TransactionsScreens from "./stack-navigators";
import Icons from "../utils/Icons";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "";
                    if (route.name === "home") {
                        iconName = "home";
                        color = focused ? "#fff" : "red";
                    } else if (route.name === "transaction") {
                        iconName = "swap";
                        color = focused ? "#fff" : "red";
                    } else if (route.name === "profile") {
                        iconName = "user";
                        color = focused ? "#fff" : "red";
                    }
                    return <Icons name={iconName} type={"antdesign"} size={20} color={"black"} />;
                },
            })}
            initialRouteName="home">
            <Tab.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="transaction" component={TransactionsScreens} options={{ headerShown: false }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default TabNavigator