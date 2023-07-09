import React, { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useThemeHook from "./hooks/useThemeHook";
import Routing from "./Routing/Routing";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [theme, colorMode] = useThemeHook();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routing />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
