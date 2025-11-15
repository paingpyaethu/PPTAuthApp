import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, LoginCredentials, SignupCredentials } from "@/types/auth";

type AuthContextValue = {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  signupLoading: boolean;
  initializing: boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

const PERSIST_USER_KEY = "@persist_user";
const REGISTERED_KEY = "@auth_registered_user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  const loadUser = async () => {
    try {
      const stored = await AsyncStorage.getItem(PERSIST_USER_KEY);
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

  useEffect(() => {
    loadUser();
  }, []);

  const persistUser = async (u: User | null) => {
    if (u) {
      await AsyncStorage.setItem(PERSIST_USER_KEY, JSON.stringify(u));
    } else {
      await AsyncStorage.removeItem(PERSIST_USER_KEY);
    }
  };

  const login = async ({ email, password }: LoginCredentials) => {
    setLoading(true);
    try {
      const stored = await AsyncStorage.getItem(REGISTERED_KEY);

      if (!stored) {
        throw new Error("Incorrect credentials");
      }

      const registered: SignupCredentials = JSON.parse(stored);

      const isMatch =
        registered.email === email && registered.password === password;

      if (!isMatch) {
        throw new Error("Incorrect credentials");
      }

      const authUser: User = { name: registered.name, email: registered.email };
      setUser(authUser);
      await persistUser(authUser);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const signup = async ({ name, email, password }: SignupCredentials) => {
    setSignupLoading(true);
    try {
      const toStore: SignupCredentials = { name, email, password };
      await AsyncStorage.setItem(REGISTERED_KEY, JSON.stringify(toStore));
    } finally {
      setTimeout(() => {
        setSignupLoading(false);
      }, 2000);
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
        signupLoading,
        initializing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
