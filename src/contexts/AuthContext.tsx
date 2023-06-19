import React from "react";
import { User } from "../entities/User";

import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authService from "../services/authService";
import { Alert } from "react-native";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isSignout: boolean;
}

interface AuthAction {
  type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
  user: User | null;
  token: string | null;
}

function authReducer(prevState: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        user: action.user,
        token: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        user: action.user,
        token: action.token,
        isSignout: false,
      };
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        user: null,
        token: null,
        isSignout: true,
      };
    default:
      return prevState;
  }
}

interface AuthContextData extends AuthState {
  register: (
    name: string,
    email: string,
    password: string,
    phone: string
  ) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    token: null,
    user: null,
  });

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let storedToken: string | null = null;
      let currentUser: User | null = null;

      try {
        storedToken = await SecureStore.getItemAsync("onebitshop-token");
        const userDataString = await AsyncStorage.getItem("current-user");
        currentUser = userDataString ? JSON.parse(userDataString) : null;
      } catch (error) {
        console.log(error);
      }

      dispatch({
        type: "RESTORE_TOKEN",
        token: storedToken,
        user: currentUser,
      });
    };

    bootstrapAsync();
  }, []);

  const methods = React.useMemo(
    () => ({
      logout: async () => {},
      login: async (email: string, password: string) => {},
      register: async (
        name: string,
        email: string,
        password: string,
        phone: string
      ) => {
        const params = { name, email, password, phone };

        const data = await authService.register(params);

        if (data.status === 400) {
          Alert.alert("Email já cadastrado!");

          return;
        }

        dispatch({
          type: "SIGN_IN",
          token: data?.data.token,
          user: data?.data.user._id,
        });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...state, ...methods }}>
      {children}
    </AuthContext.Provider>
  );
}
