import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "@/hooks/useAuth";
import { LoginScreen, SignupScreen, HomeScreen } from "@/screens";
import { View } from "react-native";

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type AppStackParamList = {
  Home: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AuthStackNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false, animation: "fade" }}
  >
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);

const AppStackNavigator = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
    <AppStack.Screen name="Home" component={HomeScreen} />
  </AppStack.Navigator>
);

const RootNavigator = () => {
  const { user, initializing } = useAuth();

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: "rgba(36,16,39,0.98)" }}>
        {user ? <AppStackNavigator /> : <AuthStackNavigator />}
      </View>
    </NavigationContainer>
  );
};

export default RootNavigator;
