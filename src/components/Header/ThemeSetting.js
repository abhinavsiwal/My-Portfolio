import React, { useState,useContext } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import ThemeContext from "../../store/store";

import NavModal from './NavModal'

const useStyles = makeStyles((theme) => ({
  navContainer: {
    position: "fixed",
    top: "2em",
    right: "-20em",
    zIndex:1400
  },
  settingIconContainer: {
    height: "20px",
    width: "20px",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex:1400,
  },
  iconOuterContainer: {
      ...theme.border,
    borderRadius: "50px",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  colorContainer: {
      ...theme.border,
    height: "6em",
    width: "18em",
    marginLeft: "2rem",
    borderRadius: 20,
    zIndex:1400,
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

const ThemeSetting = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  // const [showNavModal, setShowNavModal] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <React.Fragment>
      {/* <NavModal showNavModal={showNavModal} /> */}
    <Grid
      container
      direction="column"
      className={classes.navContainer}
      justifyContent="space-between"
      alignItems="flex-start"
      style={{ height: "10em", width: "24em" }}
    >
      <Grid item>
        <IconButton className={classes.iconOuterContainer}>
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
                  // initial={{rotate:0}}
                  // animate={{rotate:360}}
                  // transition={{type:"tween", duration:0.2,repeat:Infinity,}}
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
    </React.Fragment>
  );
};

export default ThemeSetting;
