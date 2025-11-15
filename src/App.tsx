import React from "react";
import { SystemBars } from "react-native-edge-to-edge";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { AuthProvider } from "@/context/AuthContext";
import { useAppTheme } from "@/hooks/useAppTheme";
import RootNavigator from "@/navigation/RootNavigator";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { CustomToast } from "@/components/ui";

const AppContent = () => {
  const { theme } = useAppTheme();

  return (
    <>
      <SystemBars style={"light"} />
      <RootNavigator />
      <CustomToast />
    </>
  );
};

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <KeyboardProvider>
        <ThemeProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </ThemeProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
};

export default App;
