import React,{useContext,useEffect} from 'react';
import Home from './components/Home/Home';

import { ThemeProvider } from "@material-ui/styles";
import Theme from './components/UI/Theme'
import { Theme1,Theme2,Theme3,Theme4,Theme5 } from './components/UI/Theme';
import ThemeContext from './store/store'
import ThemeSetting from './components/Header/ThemeSetting';

const App =()=>{
    const themeCtx = useContext(ThemeContext);
    console.log(themeCtx.theme);
    let theme;

    if(themeCtx.theme===0){
      theme = Theme;
    }
    if(themeCtx.theme===1){
      theme = Theme1;
    }
    if(themeCtx.theme===2){
      theme = Theme2;
    }
    if(themeCtx.theme===3){
      theme = Theme3;
    }
    if(themeCtx.theme===4){
      theme = Theme4;
    }
    if(themeCtx.theme===5){
      theme = Theme5;
    }

  return (
    <ThemeProvider theme={theme}>
    <div>
      <ThemeSetting />
       <Home/> 
    </div>
    </ThemeProvider>
  );
}

export default App;
