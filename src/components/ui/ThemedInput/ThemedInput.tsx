import { useAppTheme } from "@/hooks/useAppTheme";
import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import ThemedText from "../ThemedText/ThemedText";
import { EyeIcon } from "@/svg/CommonIcons";
import { config, FONT_FAMILY } from "@/theme/config";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

interface ThemedInputProps<T extends FieldValues>
  extends UseControllerProps<T> {
  label?: string;
  secureToggle?: boolean;
  leftIcon?: React.ReactNode;
}

const ThemedInput = <T extends FieldValues>({
  name,
  rules,
  control,
  label,
  secureToggle,
  secureTextEntry,
  leftIcon,
  style,
  ...rest
}: TextInputProps & ThemedInputProps<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules,
  });
  const { theme } = useAppTheme();
  const [isSecure, setIsSecure] = useState(!!secureTextEntry);

  return (
    <View style={styles.container}>
      {label && (
        <ThemedText
          variant="fs_16"
          style={{
            marginBottom: config.spacing._6,
            color: theme.colors.textSecondary,
          }}
        >
          {label}
        </ThemedText>
      )}
      <View
        style={[
          styles.inputWrapper,
          {
            backgroundColor: theme.colors.inputBackground,
            borderColor: error ? theme.colors.error : theme.colors.inputBorder,
          },
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          {...rest}
          placeholderTextColor={theme.colors.textSecondary}
          style={[styles.input, { color: theme.colors.textPrimary }, style]}
          onChangeText={onChange}
          value={value}
          autoCapitalize="none"
          cursorColor={theme.colors.cursorColor}
          secureTextEntry={isSecure}
        />
        {secureToggle && (
          <TouchableOpacity onPress={() => setIsSecure(prev => !prev)}>
            <EyeIcon closed={isSecure} color={theme.colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <ThemedText
          variant="fs_12"
          style={{ color: theme.colors.error, marginTop: config.spacing._4 }}
        >
          {error.message}
        </ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: config.spacing._16,
  },
  label: {
    marginBottom: config.spacing._6,
  },
  inputWrapper: {
    height: config.spacing._55,
    borderRadius: config.spacing._18,
    borderWidth: config.spacing._1,
    paddingHorizontal: config.spacing._16,
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    marginRight: config.spacing._10,
  },
  input: {
    flex: 1,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: config.spacing._14,
  },
});

export default ThemedInput;
