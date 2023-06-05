import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { myTheme } from "./src/styles";
import ErrorBoundary from "./src/components/Error";

export default function App() {
  return (
    <ErrorBoundary>
      <StatusBar style="light" />
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
