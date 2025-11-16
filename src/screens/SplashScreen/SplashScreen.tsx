import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";

const SplashScreen = () => {
  const { theme } = useAppTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Image
        source={require("@/assets/images/splash.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
