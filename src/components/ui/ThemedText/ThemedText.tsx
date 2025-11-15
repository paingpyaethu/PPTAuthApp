import React from "react";
import { Text as RNText, TextProps } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";
import { config } from "@/theme/config";

type ThemedTextProps = TextProps & {
  variant?: "fs_28" | "fs_18" | "fs_16" | "fs_12";
};

const ThemedText = ({
  variant = "fs_16",
  style,
  children,
  ...rest
}: ThemedTextProps) => {
  const { theme } = useAppTheme();

  const variantStyle = (() => {
    switch (variant) {
      case "fs_28":
        return config.fonts.fs_28;
      case "fs_18":
        return config.fonts.fs_18;
      case "fs_16":
        return config.fonts.fs_16;
      default:
        return config.fonts.fs_12;
    }
  })();

  return (
    <RNText
      {...rest}
      style={[{ color: theme.colors.textPrimary }, variantStyle, style]}
    >
      {children}
    </RNText>
  );
};

export default ThemedText;
