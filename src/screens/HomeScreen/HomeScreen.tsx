import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ThemedButton, ThemedText, ThemedCard } from "@/components/ui";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAuth } from "@/hooks/useAuth";
import { config } from "@/theme/config";
import { MoonIcon, SunIcon } from "@/svg/CommonIcons";

const HomeScreen = () => {
  const { theme, toggleTheme } = useAppTheme();
  const { user, logout } = useAuth();

  return (
    <ImageBackground
      source={require("@/assets/images/auth-bg.png")}
      style={[styles.heroBg]}
      imageStyle={styles.heroBgImage}
    >
      <ThemedCard>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "80%" }}>
            <ThemedText
              variant="fs_24"
              style={{ marginBottom: config.spacing._16 }}
            >
              Hello, {user?.name ?? "User"} 👋
            </ThemedText>
            <ThemedText style={{ marginBottom: config.spacing._8 }}>
              Email: {user?.email}
            </ThemedText>
          </View>

          <View style={{ width: "20%", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={toggleTheme}>
              {theme.mode === "light" ? (
                <MoonIcon color={theme.colors.textPrimary} />
              ) : (
                <SunIcon color={theme.colors.textPrimary} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <ThemedButton
          title={`Switch to ${theme.mode === "light" ? "Dark" : "Light"} Mode`}
          onPress={toggleTheme}
          style={{ marginTop: config.spacing._24 }}
        />

        <ThemedButton
          title="Logout"
          onPress={logout}
          style={{ marginTop: config.spacing._12 }}
        />
      </ThemedCard>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heroBg: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: config.spacing._15,
    overflow: "hidden",
  },
  heroBgImage: {
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: config.spacing._18,
    justifyContent: "center",
  },
  card: {
    borderRadius: config.spacing._20,
    padding: config.spacing._20,
    elevation: 4,
  },
});

export default HomeScreen;
