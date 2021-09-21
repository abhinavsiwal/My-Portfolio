import React,{useContext} from "react";
import {createPortal} from 'react-dom';
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import ThemeContext from "../../store/store";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    positon: "absolute",
    top: 0,
    height: "100vh",
    width: "100%",
    background: theme.palette.primary.main,
    paddingTop:"8em"
  },
  // navItem: {
  //   ...theme.border,
  //   height: "4em",
  //   width: "10em",
  //   margin: "1rem 0",
  //   borderRadius: "20px",
  // },
  navText: {
    fontFamily: "pacifico",
    color: theme.palette.secondary.main,
    fontWeight: 800,
    fontSize: "1rem",
    ...theme.border,
    height: "4em",
    width: "10em",
    margin: "1rem 0",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const divVariants = {
  in: {
    y: 0,
    display: "block",
    transition: {
      y: {
        type: "spring",
        duration: 1,
        mass: 0.4,
        damping: 8,
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  },
  out: {
    y: "-100vh",
    display: "none",
    transition: {
      y: {
        type: "spring",
        duration: 1,
      },
    },
  },
  exit: {
    y: "-100vh",
    display: "none",
    transition: {
      y: {
        type: "spring",
        duration: 1,
      },
    },
  },
};


const NavModal = (props) => {
  const classes = useStyles();
  const theme=useTheme();
  const themeCtx = useContext(ThemeContext);
  const {active,changeActiveValue}=themeCtx;
  return (
    <React.Fragment>
    {createPortal(
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.modalContainer}
          component={motion.div}
          key="motionDiv"
          variants={divVariants}
          animate={props.showNavModal ? "in" : "out"}
          exit="exit"
        >

            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              className={classes.navItem}
            >
              <Button
                component={Link}
                to="/"
                className={classes.navText}
                onClick={() => {props.setShowNavModal(false);changeActiveValue(0)}}
                style={{color:active===0?theme.palette.text.main:"inherit"}}
              >
                Home
              </Button>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              className={classes.navItem}        
            >
              <Button
                className={classes.navText}
                component={Link}
                to="/about"
                onClick={() => {props.setShowNavModal(false);changeActiveValue(1)}}
                style={{color:active===1?theme.palette.text.main:"inherit"}}
            
              >
                About
              </Button>
            </Grid>
           
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              className={classes.navItem}
            >
              <Button
                className={classes.navText}
                component={Link}
                to="/portfolio"
                onClick={() => {props.setShowNavModal(false);changeActiveValue(2)}}
                style={{color:active===2?theme.palette.text.main:"inherit"}}
    
              >
                Portfolio
              </Button>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              className={classes.navItem}         
            >
              <Button
                className={classes.navText}
                component={Link}
                to="/contact"
                onClick={() => {props.setShowNavModal(false);changeActiveValue(3)}}
                style={{color:active===3?theme.palette.text.main:"inherit"}}
           
              >
                Contact
              </Button>
            </Grid>
        </Grid>,document.getElementById('navModal')
    )}     
          </React.Fragment>
  );
};

export default NavModal;
