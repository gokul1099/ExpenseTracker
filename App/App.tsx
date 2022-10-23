import React from "react";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "./screens/error/ErrorBoundary";
import { ThemeContextProvider } from "./utils/ThemeManager";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppNavigator } from "./navigators/app-navigator";
import database from "./db";
import DatabaseProvider from "@nozbe/watermelondb/DatabaseProvider"
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchError={"always"}>
          <ThemeContextProvider>
            <DatabaseProvider database={database}>
              <AppNavigator />
            </DatabaseProvider>
          </ThemeContextProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
