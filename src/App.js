import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import { ThemeProvider } from "@material-ui/styles";
import Theme from "./components/UI/Theme";
import { Theme1, Theme2, Theme3, Theme4, Theme5 } from "./components/UI/Theme";
import ThemeContext from "./store/store";
import ThemeSetting from "./components/Header/ThemeSetting";
import NavModal from "./components/Header/NavModal";

const App = () => {
  const themeCtx = useContext(ThemeContext);
  const [showNavModal, setShowNavModal] = useState(false);
  let theme;

  if (themeCtx.theme === 0) {
    theme = Theme;
  }
  if (themeCtx.theme === 1) {
    theme = Theme1;
  }
  if (themeCtx.theme === 2) {
    theme = Theme2;
  }
  if (themeCtx.theme === 3) {
    theme = Theme3;
  }
  if (themeCtx.theme === 4) {
    theme = Theme4;
  }
  if (themeCtx.theme === 5) {
    theme = Theme5;
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeSetting
        setShowNavModal={setShowNavModal}
        showNavModal={showNavModal}
      />
      <NavModal setShowNavModal={setShowNavModal} showNavModal={showNavModal} />
      <Switch>
        <Route path="/" exact>
          {!showNavModal && <Home />}
        </Route>
        <Route path="/about" exact>
          <div>About</div>
        </Route>
        <Route path="/services" exact>
          <div>Services</div>
        </Route>
        <Route path="/portfolio" exact>
          <div>Portfolio</div>
        </Route>
        <Route path="/contact" exact>
          <div>Contact</div>
        </Route>

      </Switch>
    </ThemeProvider>
  );
};

export default App;
