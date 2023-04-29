import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { AuthGoogleContext } from "./contexts/AuthGoogleContext";
import { Router } from "./routes/Router";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthGoogleContext>
          <Router />
        </AuthGoogleContext>
      </BrowserRouter>
    </ThemeProvider>
  )
}
