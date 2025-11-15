import React, { createContext, useMemo, useState } from "react";
import { Appearance } from "react-native";
import { AppTheme, lightTheme, darkTheme } from "./index";

type ThemeContextValue = {
  theme: AppTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemScheme = Appearance.getColorScheme();
  const [mode, setMode] = useState<"light" | "dark">(
    systemScheme === "dark" ? "dark" : "light",
  );

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: mode === "light" ? lightTheme : darkTheme,
      toggleTheme: () => setMode(prev => (prev === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
