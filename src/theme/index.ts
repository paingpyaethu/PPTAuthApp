export type AppTheme = {
  mode: "light" | "dark";
  colors: {
    background: string;
    textPrimary: string;
    textSecondary: string;
    error: string;
    cursorColor: string;
    cardBackground: string;
    inputBackground: string;
    inputBorder: string;
    buttonText: string;
  };
  gradients: {
    background: string[];
    card: string[];
    buttonPrimary: string[];
  };
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    background: "#050816",
    textPrimary: "#FFFFFF",
    textSecondary: "#A6AEC5",
    error: "#FB7185",
    cursorColor: "#EC4899",
    cardBackground: "rgba(255, 255, 255, 0.1)",
    inputBackground: "rgba(36,16,39,0.98)",
    inputBorder: "rgba(120,130,170,0.6)",
    buttonText: "#FFFFFF",
  },
  gradients: {
    background: ["#1E1034", "#050816"],
    card: ["rgba(23,18,48,0.98)", "rgba(36,16,39,0.98)"],
    buttonPrimary: ["#FF4B9A", "#FF4BD8", "#9B5CFF"],
  },
};

export const lightTheme: AppTheme = darkTheme;
