import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CurrentUserProvider } from "./Auth";
import { ThemeProvider } from "./Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);
