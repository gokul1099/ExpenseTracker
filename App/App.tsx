import React from "react";
import {SafeAreaView, initialWindowMetrics, SafeAreaProvider} from "react-native-safe-area-context";
import {AppNavigator} from "./navigators/app-navigator";
import {ErrorBoundary} from "./screens/error/ErrorBoundary";
import {ThemeContextProvider} from "./utils/ThemeManager";
import {GestureHandlerRootView} from "react-native-gesture-handler";
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchError={"always"}>
          <ThemeContextProvider>
            <AppNavigator />
          </ThemeContextProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
