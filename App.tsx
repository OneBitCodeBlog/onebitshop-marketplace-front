import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { myTheme } from "./src/styles";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
