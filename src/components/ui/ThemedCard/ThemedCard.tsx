import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useAppTheme } from "@/hooks/useAppTheme";
import { config } from "@/theme/config";

type ThemedCardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const ThemedCard = ({ children, style }: ThemedCardProps) => {
  const { theme } = useAppTheme();

  return (
    <LinearGradient
      colors={theme.gradients.card}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      <View style={styles.inner}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: config.spacing._24,
    overflow: "hidden",
  },
  inner: {
    borderRadius: config.spacing._30,
    paddingHorizontal: config.spacing._22,
    paddingTop: config.spacing._22,
    paddingBottom: config.spacing._24,
  },
});

export default ThemedCard;
