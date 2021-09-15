import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import ThemeContext from "../../store/store";
import Lottie from 'react-lottie' ;
import homeAnimation from '../../animations/home.json';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  animationContainer:{
    ...theme.border,
    height:"31em",
    width:"31em",
    borderRadius:"30px",
  }
}));

const defaultOptions={
  loop:true,
  autoplay:true,
  animationData:homeAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }

}

const Home = (props) => {
  // const theme=useTheme();

  const classes = useStyles();
  // const themeCtx = useContext(ThemeContext);
  return (
    <Grid
      container
      direction="row"
      className={classes.container}
      style={{ margin: 0 }}
    >
      <Grid item container md>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          style={{ marginLeft: "4em" }}
        >
          <Grid item>
            <Typography variant="h5">Hello</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">I'm Abhinav Siwal</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">A Full Stack Web Developer</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained">More about me</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container md justifyContent="center"
      alignItems="center">
        <Grid item container className={classes.animationContainer}>
        <Lottie options={defaultOptions} height={"30em"} width={"30em"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
