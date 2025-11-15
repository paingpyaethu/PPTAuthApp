import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from "react-native-toast-message";
import { useAppTheme } from "@/hooks/useAppTheme";
import { config, FONT_FAMILY } from "@/theme/config";

const ToastSuccess = (
  props: React.JSX.IntrinsicAttributes & BaseToastProps,
) => {
  const { theme } = useAppTheme();
  const $style: StyleProp<ViewStyle> = [
    {
      width: "80%",
      backgroundColor: theme.colors.background,
      borderRadius: config.spacing._6,
      height: config.spacing._70,
      borderLeftWidth: config.spacing._8,
      borderLeftColor: theme.colors.success,
    },
  ];
  return (
    <BaseToast
      {...props}
      style={$style}
      contentContainerStyle={{ paddingHorizontal: config.spacing._10 }}
      text2Style={{
        fontFamily: FONT_FAMILY.BOLD,
        color: theme.colors.textPrimary,
        ...config.fonts.fs_16,
      }}
    />
  );
};

const ToastError = (props: React.JSX.IntrinsicAttributes & BaseToastProps) => {
  const { theme } = useAppTheme();
  const $style: StyleProp<ViewStyle> = [
    {
      width: "80%",
      backgroundColor: theme.colors.background,
      borderRadius: config.spacing._6,
      height: config.spacing._70,
      borderLeftWidth: config.spacing._8,
      borderLeftColor: theme.colors.success,
    },
  ];
  return (
    <ErrorToast
      {...props}
      style={$style}
      contentContainerStyle={{ paddingHorizontal: config.spacing._10 }}
      text2Style={{ fontFamily: FONT_FAMILY.BOLD, ...config.fonts.fs_16 }}
    />
  );
};

const toastConfig = {
  success: ToastSuccess,
  error: ToastError,
};

const CustomToast = () => {
  return <Toast config={toastConfig} />;
};

export default CustomToast;
