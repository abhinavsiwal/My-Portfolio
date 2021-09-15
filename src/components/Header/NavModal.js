import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {motion} from 'framer-motion'

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    positon: "absolute",
    top: 0,
    height: "100vh",
    width: "100%",
    background: theme.palette.primary.main,
  },
  navItem: {
    ...theme.border,
    height: "4em",
    width: "10em",
    margin: "1rem 0",
    borderRadius: "20px",
  },
  navText: {
    fontFamily: "pacifico",
    color: theme.palette.text.main,
    fontWeight:800,
    fontSize:"1rem",
    "&:hover":{
      backgroundColor:"transparent",
    }
  },
}));

const divVariants={
  open:{
    y:0,
    transition: {
      y: {
        type: "spring",
        duration: 1,
      },
    },
  },
  close:{
    y:"-100vh",
    transition: {
      y: {
        type: "spring",
        duration: 1,
      },
    },
  }

}

const NavModal = (props) => {
  const classes = useStyles();
  return (
    <motion.div 
      variants={divVariants}
      animate={props.showNavModal?"close":"open"}
    >
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.modalContainer}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.navItem}
      >
        <Button className={classes.navText}>Home</Button>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.navItem}
      >
        <Button className={classes.navText}>About</Button>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.navItem}
      >
        <Button className={classes.navText}>Services</Button>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.navItem}
      >
        <Button className={classes.navText}>Portfolio</Button>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.navItem}
      >
        <Button className={classes.navText}>Contact</Button>
      </Grid>
    </Grid>
    </motion.div>
  );
};

export default NavModal;
