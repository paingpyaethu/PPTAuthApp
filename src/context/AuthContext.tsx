import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, LoginCredentials, SignupCredentials } from "@/types/auth";

type AuthContextValue = {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  initializing: boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "@auth_user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadUser = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: User = JSON.parse(stored);
        setUser(parsed);
      }
    } catch (error) {
      console.warn("Error loading auth user", error);
    } finally {
      setInitializing(false);
    }
  };

  // Load persisted auth
  useEffect(() => {
    loadUser();
  }, []);

  const persistUser = async (u: User | null) => {
    if (u) {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    } else {
      await AsyncStorage.removeItem(STORAGE_KEY);
    }
  };

  const login = async ({ email, password }: LoginCredentials) => {
    setLoading(true);
    try {
      // Mock authentication. Replace with API call in real app.
      if (email === "test@example.com" && password === "password") {
        const authUser: User = { name: "Test User", email };
        setUser(authUser);
        await persistUser(authUser);
      } else {
        throw new Error("Incorrect credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({ name, email, password }: SignupCredentials) => {
    setLoading(true);
    try {
      // Mock signup; in real app call API & handle errors
      const authUser: User = { name, email };
      setUser(authUser);
      await persistUser(authUser);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      setUser(null);
      await persistUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loading,
        initializing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
