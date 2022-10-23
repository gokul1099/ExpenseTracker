import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./navigationUtilities";
// import TransactionScreen from "./stack-navigators"
import TabNavigator from "./tab-navigator";
import { AddTransactionScreen } from "../screens/addTransaction";

type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>;
export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  const MainStack = createNativeStackNavigator()
  return (
    <NavigationContainer ref={navigationRef} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme} {...props}>
      <MainStack.Navigator>
        <MainStack.Screen name="tab" component={TabNavigator} options={{ headerShown: false }} />
        <MainStack.Screen name="AddTransaction" component={AddTransactionScreen} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

AppNavigator.displayName = "AppNavigator";
