import React, { useState,useContext } from "react";
import { motion } from "framer-motion";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import {
  IconButton,
  Grid,
  Typography,
  useMediaQuery
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import ThemeContext from "../../store/store";


const useStyles = makeStyles((theme) => ({
  navContainer: {
    position: "fixed",
    top: "2em",
    right: "-20em",
    zIndex:1500,
    height: "10em",
    width: "24em", 
    [theme.breakpoints.down("xs")]:{
      top:"1em",
      right:"-21em",
      heigth:"6em",
      width:"24em"
    }
  },
  settingIconContainer: {
    height: "20px",
    width: "20px",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex:1400,
    [theme.breakpoints.down("xs")]:{
      height: "15px",
      width: "15px",
    }
    
  },
  iconOuterContainer: {
      ...theme.border,
    borderRadius: "50px",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]:{
      height: "40px",
      width: "40px",
      margin:"4px 0"
    }
  },
  colorContainer: {
      ...theme.border,
    height: "6em",
    width: "18em",
    marginLeft: "2rem",
    borderRadius: 20,
    zIndex:1400,
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.down("xs")]:{
      height:"4em",
      width:"14em",
    }
  },
  colorButton: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    display: "block",
    marginRight: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]:{
      height: "24px",
      width: "26px",
      marginRight: "0.5rem",
    }
  },
}));

const drawerVariants = {
  open: {
    x: -305,
    transition: {
      x: {
        type: "spring",
        duration: 1,
      },
      delayChildren:1.2,
      staggerChildren:0.5,
    },
  },
  close: {
    x: 0,
    transition: {
      x: {
        type: "spring",
        duration: 1,
      },
    },
  },
};

const ThemeSetting = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS=useMediaQuery(theme.breakpoints.down("xs"));
  return (

    <Grid
      container
      direction="column"
      className={classes.navContainer}
      justifyContent={matchesXS?"flex-start":"space-between"}
      alignItems="flex-start"
    >
      <Grid item>
        <IconButton className={classes.iconOuterContainer} onClick={()=>{props.setShowNavModal(!props.showNavModal)}}>
          <MenuIcon color="secondary" style={{fontSize:"2rem"}} />
        </IconButton>
      </Grid>
      <Grid item>
        <motion.div 
            variants={drawerVariants}
            animate={openDrawer?"open":"close"}
            >
          <Grid container direction="row">
            <Grid item>
              <IconButton className={classes.iconOuterContainer} onClick={()=>setOpenDrawer(!openDrawer)}>
                <motion.div
                  className={classes.settingIconContainer}
                  initial={{rotate:0}}
                  animate={{rotate:360}}
                  transition={{type:"spring", duration:1 ,repeat:Infinity,originX:.5}}
                  >
                  <SettingsIcon color="secondary" />
                </motion.div>
              </IconButton>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.colorContainer}
              >
                <Grid item style={{marginBottom:"0.5em"}}>
                  <Typography variant="h5">Theme Color</Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <div
                        className={classes.colorButton}
                        style={{ backgroundColor: "#F3EFFF" }}
                        onClick={()=>{setOpenDrawer(false);themeCtx.changeTheme(0)}}
                      ></div>
                    </Grid>
                    <Grid item>
                      <div
                        className={classes.colorButton}
                        style={{ backgroundColor: "#FFE4D5" }}
                        onClick={()=>{setOpenDrawer(false);themeCtx.changeTheme(1)}}
                      ></div>
                    </Grid>
                    <Grid item>
                      <div
                        className={classes.colorButton}
                        style={{ backgroundColor: "#D8F4FF" }}
                        onClick={()=>{setOpenDrawer(false);themeCtx.changeTheme(2)}}
                      ></div>
                    </Grid>
                    <Grid item>
                      <div
                        className={classes.colorButton}
                        style={{ backgroundColor: "#c0ecb1" }}
                        onClick={()=>{setOpenDrawer(false);themeCtx.changeTheme(3)}}
                      ></div>
                    </Grid>
                    <Grid item>
                      <div
                        className={classes.colorButton}
                        style={{ backgroundColor: "#11183f" }}
                        onClick={()=>{setOpenDrawer(false);themeCtx.changeTheme(4)}}
                      ></div>
                    </Grid>
                    <Grid item>
                      <div
                        className={classes.colorButton}
                        style={{ backgroundColor: "#1f2833" }}
                        onClick={()=>{setOpenDrawer(false);themeCtx.changeTheme(5)}}
                      ></div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ThemeSetting;
