import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { myTheme } from "./src/styles";
import ErrorBoundary from "./src/components/Error";
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <StatusBar style="light" />
        <ThemeProvider theme={myTheme}>
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  );
}
