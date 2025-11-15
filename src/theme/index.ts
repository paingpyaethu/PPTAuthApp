export type AppTheme = {
  mode: "light" | "dark";
  colors: {
    background: string;
    textPrimary: string;
    textSecondary: string;
    success: string;
    error: string;
    cursorColor: string;
    card: string;
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

export const lightTheme: AppTheme = {
  mode: "light",
  colors: {
    background: "#F3F4F6",
    card: "#F3F4F6",
    textPrimary: "#111827",
    textSecondary: "#A6AEC5",
    inputBackground: "rgba(36,16,39,0.98)",
    inputBorder: "rgba(120,130,170,0.6)",
    error: "#EF4444",
    buttonText: "#FFFFFF",
    success: "#22C55E",
    cursorColor: "#EC4899",
    cardBackground: "rgba(255, 255, 255, 0.1)",
  },
  gradients: {
    background: ["#654ea3", "#eaafc8"],
    card: ["#EECDA3", "#EF629F", "#0B486B"],
    buttonPrimary: ["#4F46E5", "#EC4899"],
  },
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    background: "#050816",
    textPrimary: "#FFFFFF",
    textSecondary: "#A6AEC5",
    success: "#34D399",
    error: "#FB7185",
    cursorColor: "#EC4899",
    card: "rgba(36,16,39,0.98)",
    cardBackground: "rgba(255, 255, 255, 0.1)",
    inputBackground: "rgba(36,16,39,0.98)",
    inputBorder: "rgba(120,130,170,0.6)",
    buttonText: "#FFFFFF",
  },
  gradients: {
    background: ["#C33764", "#1D2671"],
    card: ["#3a6186", "#89253e", "#1D2671"],
    buttonPrimary: ["#FF4B9A", "#FF4BD8", "#9B5CFF"],
  },
};
