import {
  Box,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { FC, ReactNode } from "react";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
  })
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
