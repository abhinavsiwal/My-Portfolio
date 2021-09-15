import { createTheme } from "@material-ui/core/styles";

//white
const theme = {
  primary: "#F3EFFF",
  secondary: "#6A35FF",
  text: "#2D3958",
};

//Pinkish
const theme1 = {
  primary: "#FFE4D5",
  secondary: "#ACCBD2",
  text: "#000000",
};
//LightBluish
const theme2 = {
  primary: "#D8F4FF",
  secondary: "#E63956",
  text: "#110F48",
};

//Greenish
const theme3 = {
  primary: "#c0ecb1",
  secondary: "#F4F9FC",
  text: "#0A1C2F",
};

// DarkBlue
const theme4 = {
  primary: "#11183f",
  secondary: "#13CAE6",
  text: "#EEF2F6",
};

const theme5 = {
  primary: "#1f2833",
  secondary: "#66fcf1",
  text: "#c5c6c7",
};

const Theme = createTheme({
  palette: {
    primary: {
      main: theme.primary,
    },
    secondary: {
      // main: theme.secondary,
      main: theme.text,
    },
    text: {
      main: theme.text,
    },
    info: {
      main: theme.text,
    },
  },
  border: {
    backGround: theme.primary,
    boxShadow: "inset 5px 5px 14px #bbb8c4",
    inset: "-5px -5px 14px #ffffff",
  },
  typography:{
    h5:{
      color:theme.text,
      fontSize:"1.5rem",
      fontWeigth:400,
      fontFamily:"pacifico"
    }
  }
});

const universal={
  lightBlue:"#85dcb",
  apricot:"#fac9b8",
  peach:"#ffed86",
  pink:"ffadad",
  purple:"#7450e9",
  blueGreen:"#006d77",
  green:"#52b788",
  lightGreen:"#d8f3dc",
  
}

export const Theme1 = createTheme({
  palette: {
    primary: {
      main: theme1.primary,
    },
    secondary: {
      // main: theme1.secondary,
      main: theme1.text,
    },
    text: {
      main: theme1.text,
    },
    info: {
      main: theme1.text,
    },
  },
  typography:{
    h5:{
      color:theme1.text,
      fontSize:"1.5rem",
      fontWeigth:400,
      fontFamily:"pacifico"
    }
  },
  border: {
    background: "#ffe4d5",
    boxShadow: "inset 11px 11px 19px #dbc4b7",
    inset: "-11px -11px 19px #fffff3",
  },
});
export const Theme2 = createTheme({
  palette: {
    primary: {
      main: theme2.primary,
    },
    secondary: {
      // main: theme2.secondary,
      main: theme2.text,
    },
    text: {
      main: theme2.text,
    },
    info: {
      main: theme2.text,
    },
  },
  typography:{
    h5:{
      color:theme2.text,
      fontSize:"1.5rem",
      fontWeigth:400,
      fontFamily:"pacifico"
    }
  },
  border: {
    background: "#d8f4ff",
    boxShadow: "inset 9px 9px 20px #a4b9c2",
    inset: "-9px -9px 20px #ffffff",
  },
});
export const Theme3 = createTheme({
  palette: {
    primary: {
      main: theme3.primary,
    },
    secondary: {
      // main: theme3.secondary,
      main: theme3.text,
    },
    text: {
      main: theme3.text,
    },
    info: {
      main: theme3.text,
    },
  },
  border: {
    background: "#c0ecb1",
    boxShadow: "inset 9px 9px 20px #92b387",
    inset: "-9px -9px 20px #eeffdb",
  },
  typography:{
    h5:{
      color:theme3.text,
      fontSize:"1.5rem",
      fontWeigth:400,
      fontFamily:"pacifico"
    }
  }
});
export const Theme4 = createTheme({
  palette: {
    primary: {
      main: theme4.primary,
    },
    secondary: {
      // main: theme4.secondary,
      main: theme4.text,
    },
    text: {
      main: theme4.text,
    },
    info: {
      main: theme4.text,
    },
  },
  typography:{
    h5:{
      color:theme4.text,
      fontSize:"1.5rem",
      fontWeigth:400,
      fontFamily:"pacifico"
    }
  },
  border: {
    background: "#11183f",
    boxShadow: "inset 9px 9px 20px #0d1230",
    inset: "-9px -9px 20px #151e4e",
  },
});
export const Theme5 = createTheme({
  palette: {
    primary: {
      main: theme5.primary,
    },
    secondary: {
      // main: theme5.secondary,
      main: theme5.text,
    },
    text: {
      main: theme5.text,
    },
    info: {
      main: theme5.text,
    },
  },
  typography:{
    h5:{
      color:theme5.text,
      fontSize:"1.5rem",
      fontWeigth:400,
      fontFamily:"pacifico"
    }
  },
  border: {
    background: "#1f2833",
    boxShadow: "inset 9px 9px 20px #181e27",
    inset: "-9px -9px 20px #26323f",
  },
});

export default Theme;
