import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import ThemeContext from "../../store/store";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    positon: "fixed",
    top: 0,
    height: "100vh",
    width: "100%",
    background: theme.palette.primary.main,
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
const navVariants = {
  out: {
    x: "-100vw",
    transition: {
      x: {
        duration: 2,
        delay: 2,
      },
    },
  },
  in: {
    x: 0,
    transition: {
      x: {
        duration: 1,
        delay: 2,
      },
    },
  },
  exit: {
    x: "100vw",
    transition: {
      x: {
        duration: 2,
        delay: 2,
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
    <AnimatePresence>
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
              component={motion.div}
              variants={navVariants}
              initial="out"
              animate="in"
              exit="exit"
              key="home"
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
              component={motion.div}
              variants={navVariants}
              initial="out"
              animate="in"
              exit="exit"
              key="about"
        
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
              component={motion.div}
              variants={navVariants}
              initial="out"
              animate="in"
              exit="exit"
              key="services"
            >
              <Button
                className={classes.navText}
                component={Link}
                to="/services"
                onClick={() => {props.setShowNavModal(false);changeActiveValue(2)}}
                style={{color:active===2?theme.palette.text.main:"inherit"}}
      
              >
                Services
              </Button>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              className={classes.navItem}
              component={motion.div}
              variants={navVariants}
              initial="out"
              animate="in"
              exit="exit"
              key="portfolio"
            >
              <Button
                className={classes.navText}
                component={Link}
                to="/portfolio"
                onClick={() => {props.setShowNavModal(false);changeActiveValue(3)}}
                style={{color:active===3?theme.palette.text.main:"inherit"}}
    
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
              component={motion.div}
              variants={navVariants}
              initial="out"
              animate="in"
              exit="exit"
              key="contact"
         
            >
              <Button
                className={classes.navText}
                component={Link}
                to="/contact"
                onClick={() => {props.setShowNavModal(false);changeActiveValue(4)}}
                style={{color:active===4?theme.palette.text.main:"inherit"}}
           
              >
                Contact
              </Button>
            </Grid>
        </Grid>
    </AnimatePresence>
  );
};

export default NavModal;
