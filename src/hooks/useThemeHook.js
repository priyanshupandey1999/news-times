import { useState, useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";
import { paletteDark, paletteLight } from "./../Theme/Theme";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && paletteDark),
    ...(mode === "light" && paletteLight),
  },
});

const useThemeHook = () => {
  const localStorageMode = localStorage.getItem("mode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // System Preference Theme

  const [mode, setMode] = useState(
    localStorageMode || (prefersDarkMode ? "dark" : "light")
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        localStorage.setItem("mode", newMode);
        setMode(newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};

export default useThemeHook;
