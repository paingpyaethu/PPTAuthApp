import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ThemedText from "../ThemedText/ThemedText";
import { useAppTheme } from "@/hooks/useAppTheme";
import { config } from "@/theme/config";

type ThemedButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const ThemedButton = ({
  title,
  onPress,
  loading,
  disabled,
  style,
  textStyle,
}: ThemedButtonProps) => {
  const { theme } = useAppTheme();
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      disabled={isDisabled}
      style={[style, isDisabled && { opacity: 0.5 }]}
    >
      <LinearGradient
        colors={theme.gradients.buttonPrimary}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator color={theme.colors.buttonText} />
        ) : (
          <ThemedText
            variant="fs_18"
            style={[{ color: theme.colors.buttonText }, textStyle]}
          >
            {title}
          </ThemedText>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: config.spacing._50,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ThemedButton;
