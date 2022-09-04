import React from "react"
import { SafeAreaView, initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { AppNavigator } from "./navigators/app-navigator"
import { ErrorBoundary } from "./screens/error/ErrorBoundary"
const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchError={"always"}>
        <AppNavigator />
      </ErrorBoundary>

    </SafeAreaProvider>
  )
}

export default App