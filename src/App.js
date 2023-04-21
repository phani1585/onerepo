import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import ScrollToTop from "./components/ScrolToTop";
import Router from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
