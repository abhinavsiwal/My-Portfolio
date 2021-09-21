import { createTheme } from "@material-ui/core/styles";

//white
const theme = {
  primary: "#F3EFFF",
  secondary: "#2D3958",
  text: "#6f5de0",
};

//Pinkish
const theme1 = {
  primary: "#FFE4D5",
  secondary: "#000000",
  text: "#006d77",
};
//LightBluish
const theme2 = {
  primary: "#D8F4FF",
  secondary: "#110F48",
  text: "#E63956",
};

//Greenish
const theme3 = {
  primary: "#c0ecb1",
  secondary: "#0A1C2F",
  text: "#006d77",
};

// DarkBlue
const theme4 = {
  primary: "#11183f",
  secondary: "#EEF2F6",
  text: "#13CAE6",
};

const theme5 = {
  primary: "#1f2833",
  text: "#66fcf1",
  secondary: "#c5c6c7",
};

const universal = {
  lightBlue: "#85dcb",
  apricot: "#fac9b8",
  peach: "#ffed86",
  pink: "ffadad",
  purple: "#7450e9",
  blueGreen: "#006d77",
  green: "#52b788",
  lightGreen: "#d8f3dc",
  neon: "#ACCBD2",
};

const Theme = createTheme({
  palette: {
    primary: {
      main: theme.primary,
    },
    secondary: {
      main: theme.secondary,
      light:"#F3EFFF"
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
  typography: {
    h3: {
      fontFamily: "raleway",
      fontWeight: "600",
      fontSize: "3.5rem",
      color: theme.secondary,
    },
    h4: {
      fontFamily: "raleway",
      fontWeight: 1000,
      color: universal.green,
    },
    h5: {
      fontSize: "1.5rem",
      color: theme.text,
      fontFamily: "pacifico",
    },
    h6:{
      fontSize:"1.3rem",
      color:theme.secondary,
      fontWeight:"500",
      fontFamily:"raleway"
    },
    body1:{
      color:theme.secondary,
      fontSize:"1rem",
      fontWeight:500,
      fontFamily:"raleway"
    }
  },
});

export const Theme1 = createTheme({
  palette: {
    primary: {
      main: theme1.primary,
    },
    secondary: {
      main: theme1.secondary,
      light:"#F3EFFF"
    },
    text: {
      main: theme1.text,
    },
    info: {
      main: theme1.text,
    },
  },
  typography: {
    h3: {
      fontFamily: "raleway",
      fontWeight: "600",
      fontSize: "3.5rem",
      color: theme1.secondary,
    },
    h4: {
      fontFamily: "raleway",
      fontWeight: 1000,
      color: universal.green,
    },
    h5: {
      color: theme1.text,
      fontSize: "1.5rem",
      fontWeigth: 400,
      fontFamily: "pacifico",
    },
    h6:{
      fontSize:"1.3rem",
      color:theme1.secondary,
      fontWeight:"500",
      fontFamily:"raleway"
    },
    body1:{
      color:theme1.secondary,
      fontSize:"1rem",
      fontWeight:500,
      fontFamily:"raleway"
    }
  },
  border: {
    background: "#ffe4d5",
    boxShadow: "inset 15px 15px 30px #d9c2b5",
    inset: "-15px -15px 30px #fffff5",
  },
});

export const Theme2 = createTheme({
  palette: {
    primary: {
      main: theme2.primary,
    },
    secondary: {
      main: theme2.secondary,
      light:"#F3EFFF"
    },
    text: {
      main: theme2.text,
    },
    info: {
      main: theme2.text,
    },
  },
  typography: {
    h3: {
      fontFamily: "raleway",
      fontWeight: "600",
      fontSize: "3.5rem",
      color: theme2.secondary,
    },
    h4: {
      fontFamily: "raleway",
      fontWeight: 1000,
      color: universal.green,
    },
    h5: {
      color: theme2.text,
      fontSize: "1.5rem",
      fontWeigth: 400,
      fontFamily: "pacifico",
    },
    h6:{
      fontSize:"1.3rem",
      color:theme2.secondary,
      fontWeight:"500",
      fontFamily:"raleway"
    },
    body1:{
      color:theme2.secondary,
      fontSize:"1rem",
      fontWeight:500,
      fontFamily:"raleway"
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
      main: theme3.secondary,
      light:"#F3EFFF"
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
  typography: {
    h3: {
      fontFamily: "raleway",
      fontWeight: "600",
      fontSize: "3.5rem",
      color: theme3.secondary,
    },
    h4: {
      fontFamily: "raleway",
      fontWeight: 1000,
      color: universal.green,
    },
    h5: {
      color: theme3.text,
      fontSize: "1.5rem",
      fontWeigth: 400,
      fontFamily: "pacifico",
    },
    h6:{
      fontSize:"1.3rem",
      color:theme3.secondary,
      fontWeight:"500",
      fontFamily:"raleway"
    },
    body1:{
      color:theme3.secondary,
      fontSize:"1rem",
      fontWeight:500,
      fontFamily:"raleway"
    }
  },
});
export const Theme4 = createTheme({
  palette: {
    primary: {
      main: theme4.primary,
    },
    secondary: {
      main: theme4.secondary,
      light:"#F3EFFF",
    },
    text: {
      main: theme4.text,
    },
    info: {
      main: theme4.text,
    },
  },
  typography: {
    h3: {
      fontFamily: "raleway",
      fontWeight: "600",
      fontSize: "3.5rem",
      color: theme4.secondary,
    },
    h4: {
      fontFamily: "raleway",
      fontWeight: 1000,
      color: universal.green,
    },
    h5: {
      color: theme4.text,
      fontSize: "1.5rem",
      fontWeigth: 400,
      fontFamily: "pacifico",
    },
    h6:{
      fontSize:"1.3rem",
      color:theme4.secondary,
      fontWeight:"500",
      fontFamily:"raleway"
    },
    body1:{
      color:"#fff",
      fontSize:"1rem",
      fontWeight:500,
      fontFamily:"raleway"
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
      main: theme5.secondary,
      light:"#F3EFFF",
    },
    text: {
      main: theme5.text,
    },
    info: {
      main: theme5.text,
    },
  },
  typography: {
    h3: {
      fontFamily: "raleway",
      fontWeight: "600",
      fontSize: "3.5rem",
      color: theme5.secondary,
    },
    h4: {
      fontFamily: "raleway",
      fontWeight: 1000,
      color: universal.green,
    },
    h5: {
      color: theme5.text,
      fontSize: "1.5rem",
      fontWeigth: 400,
      fontFamily: "pacifico",
    },
    h6:{
      fontSize:"1.3rem",
      color:theme5.secondary,
      fontWeight:"700",
      fontFamily:"raleway"
    },
    body1:{
      color:"#fff",
      fontSize:"1rem",
      fontWeight:500,
      fontFamily:"raleway"
    }
  },
  border: {
    background: "#1f2833",
    boxShadow: "inset 9px 9px 20px #181e27",
    inset: "-9px -9px 20px #26323f",
  },
});

export default Theme;
