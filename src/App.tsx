import React from "react";
import { SystemBars } from "react-native-edge-to-edge";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";
import { useAppTheme } from "@/hooks/useAppTheme";
import RootNavigator from "@/navigation/RootNavigator";
import { ThemeProvider } from "@/theme/ThemeProvider";

const AppContent = () => {
  const { theme } = useAppTheme();

  return (
    <>
      <SystemBars style={theme.mode === "dark" ? "light" : "dark"} />
      <RootNavigator />
    </>
  );
};

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
