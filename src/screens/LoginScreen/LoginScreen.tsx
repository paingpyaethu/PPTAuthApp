import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Animated,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, LockIcon } from "@/svg/CommonIcons";
import { AuthStackParamList } from "@/navigation/RootNavigator";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAuth } from "@/hooks/useAuth";
import { ThemedButton, ThemedInput, ThemedText } from "@/components/ui";
import { config } from "@/theme/config";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { isIos } from "@/utils/helper";
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle";

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">;

const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const top = useSafeAreaInsetsStyle(["top"], "padding");
  const bottom = useSafeAreaInsetsStyle(["bottom"], "padding");

  const { theme } = useAppTheme();
  const { login, loading } = useAuth();

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const illustrationOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () => {
      Animated.timing(illustrationOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });

    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(illustrationOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [illustrationOpacity]);

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login(values);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={isIos ? "padding" : "height"}
      keyboardVerticalOffset={isIos ? config.spacing._80 : 0}
      style={styles.kav}
    >
      <ImageBackground
        source={require("@/assets/images/auth-bg.png")}
        style={[styles.heroBg, top]}
        imageStyle={styles.heroBgImage}
      >
        <Animated.Image
          source={require("@/assets/images/login.png")}
          style={[styles.illustration, { opacity: illustrationOpacity }]}
          resizeMode="contain"
        />

        <View style={styles.cardWrapper}>
          <View
            style={[
              styles.card,
              { backgroundColor: theme.colors.cardBackground },
              top,
              bottom,
            ]}
          >
            <ThemedText variant="fs_28" style={{ textAlign: "center" }}>
              Welcome Back!
            </ThemedText>

            <View style={{ height: config.spacing._14 }} />

            <ThemedInput
              label="Email Address"
              placeholder="yourname@gmail.com"
              keyboardType="email-address"
              name="email"
              control={control}
              leftIcon={<MailIcon />}
            />

            <ThemedInput
              label="Password"
              placeholder="••••••••"
              secureTextEntry
              secureToggle
              name="password"
              control={control}
              leftIcon={<LockIcon />}
            />

            <View style={styles.forgotRow}>
              <TouchableOpacity>
                <ThemedText>Forgot Password?</ThemedText>
              </TouchableOpacity>
            </View>

            <View style={{ height: config.spacing._14 }} />

            <ThemedButton
              title="Sign in"
              loading={loading}
              onPress={handleSubmit(onSubmit)}
            />

            <View style={styles.bottomRow}>
              <ThemedText style={{ color: theme.colors.textSecondary }}>
                {"Don't have an account?"}
              </ThemedText>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <ThemedText> Sign up</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kav: {
    flex: 1,
  },
  heroBg: {
    flex: 1,
    overflow: "hidden",
  },
  heroBgImage: {
    resizeMode: "cover",
  },
  illustration: {
    width: "85%",
    height: "35%",
    alignSelf: "center",
  },
  cardWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  card: {
    borderTopLeftRadius: config.spacing._35,
    borderTopRightRadius: config.spacing._35,
    paddingHorizontal: config.spacing._22,
    paddingTop: config.spacing._18,
  },
  forgotRow: {
    marginTop: config.spacing._4,
    alignItems: "flex-end",
  },
  bottomRow: {
    marginTop: config.spacing._18,
    marginBottom: config.spacing._10,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default LoginScreen;
