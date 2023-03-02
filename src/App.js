import React from "react";
import SwitchRoutes from "./routes";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/open-sans";
import "@fontsource/poppins";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const palette = {
  // palette values for light mode
  light: {
    primary: {
      // light: "#2b2a2a",
      main: "#ffb400",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#666",
    },
    border: {
      main: "#ddd",
    },
  },
  // palette values for dark mode
  dark: {
    primary: {
      // light: "#2b2a2a",
      main: "#ffb400",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
    secondary: {
      light: "#2b2a2a",
      main: "#121212",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff",
    },
    border: {
      main: "#252525",
    },
  },
};

function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      colorMode: mode,
      toggleColorMode: () => {
        const root = document.querySelector("body");

        setMode((prevMode) => {
          if (prevMode === "light") {
            root.classList.remove("light");
            root.classList.add("dark");
            return "dark";
          } else {
            root.classList.remove("dark");
            root.classList.add("light");
            return "light";
          }
        });
      },
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: [
            "Poppins",
            "Open Sans",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        palette: {
          mode,
          ...palette[mode],
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <SwitchRoutes />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

