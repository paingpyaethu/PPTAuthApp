export type AppTheme = {
  mode: "light" | "dark";
  colors: {
    background: string;
    card: string;
    textPrimary: string;
    textSecondary: string;
    inputBackground: string;
    inputBorder: string;
    error: string;
    buttonText: string;
  };
  gradients: {
    background: string[];
    button: string[];
  };
};

export const lightTheme: AppTheme = {
  mode: "light",
  colors: {
    background: "#F3F4F6",
    card: "#FFFFFF",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    inputBackground: "#FFFFFF",
    inputBorder: "#D1D5DB",
    error: "#EF4444",
    buttonText: "#FFFFFF",
  },
  gradients: {
    background: ["#60A5FA", "#34D399"],
    button: ["#4F46E5", "#EC4899"],
  },
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    background: "#020617",
    card: "#0F172A",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    inputBackground: "#020617",
    inputBorder: "#374151",
    error: "#F97373",
    buttonText: "#F9FAFB",
  },
  gradients: {
    background: ["#6366F1", "#EC4899"],
    button: ["#22C55E", "#06B6D4"],
  },
};
