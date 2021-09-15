import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./store/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>,
  document.getElementById("root")
);
