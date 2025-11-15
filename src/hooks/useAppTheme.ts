import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

export const useAppTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useAppTheme must be used within ThemeProvider");
  return ctx;
};
