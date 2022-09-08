import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { navigationRef } from './navigationUtilities';
import { HomeScreen } from "../screens/home";
import { ProfileScreen } from "../screens/profile";
import { TransactionsScreen } from "../screens/transactions";
import Icons from "../utils/Icons";

const Stack = createBottomTabNavigator()
const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "";
                    if (route.name === "home") {
                        iconName = "home"
                        color = focused ? "#fff" : "red"
                    }
                    else if (route.name === "transaction") {
                        iconName = "swap"
                        color = focused ? "#fff" : "red"
                    }
                    else if (route.name === "profile") {
                        iconName = "user"
                        color = focused ? "#fff" : "red"
                    }
                    return <Icons name={iconName} type={"antdesign"} size={20} color={"black"} />
                }

            })}
            initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="transaction" component={TransactionsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> { }
export const AppNavigator = (props: NavigationProps) => {
    const colorScheme = useColorScheme()
    return (
        <NavigationContainer ref={navigationRef} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme} {...props}>
            <AppStack />
        </NavigationContainer>
    )
}

AppNavigator.displayName = "AppNavigator"


