import React from "react"
import { SafeAreaView, initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { AppNavigator } from "./navigators/app-navigator"
import { ErrorBoundary } from "./screens/error/ErrorBoundary"
import { ThemeContextProvider } from "./utils/ThemeManager"
const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchError={"always"}>
        <ThemeContextProvider>
          <AppNavigator />
        </ThemeContextProvider>
      </ErrorBoundary>

    </SafeAreaProvider>
  )
}

export default App