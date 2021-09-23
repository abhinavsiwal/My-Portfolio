import React from "react";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Container,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import ThemeContext from "../../store/store";
import Lottie from "react-lottie";
import homeAnimation from "../../animations/person2.json";
import rocketAnimation from "../../animations/tree.json";
import animation from "../../animations/parachute.json";
import mobileAnimation1 from "../../animations/boat.json";
import mobileAnimation2 from "../../animations/icons-blast.json"

import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    paddingBottom: "2rem",
  },
  animationContainer: {
    ...theme.border,
    maxHeight: "31em",
    maxWidth: "34em",
    borderRadius: "30px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "26em",
      maxWidth: "26em",
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "19em",
      maxWidth: "19em",
    },
  },
  rocketDiv: {
    heigth: "12em",
    width: "12em",
    position: "absolute",
    bottom: "2em",
    left: "18em",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
  },
  aboutButton: {
    ...theme.border,
    color: theme.palette.text.main,
    fontFamily: "pacifico",
    borderRadius: "20px",
    padding: "1rem",
    fontWeight: 600,
  },
  animationDiv: {
    position: "absolute",
    top: "5px",
    left: "20em",
    width: "14em",
    height: "7em",
  },
    mobileAnimation:{
      // position:"absolute",
      // top:"19em",
      // left:3,
      height:"7rem",
      width:"11rem",
    }
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: homeAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const rocketOptions = {
  loop: true,
  autoplay: true,
  animationData: rocketAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const options = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const mobileAnimation1Options = {
  loop: true,
  autoplay: true,
  animationData: mobileAnimation1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const mobileAnimation2Options = {
  loop: true,
  autoplay: true,
  animationData: mobileAnimation2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  // const themeCtx = useContext(ThemeContext);
  return (
    <React.Fragment>
      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.container}
        style={{ margin: 0 }}
        justifyContent={matchesSM ? "space-around" : "center"}
        alignItems="center"
      >
        <Grid item container md>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems={matchesSM ? "center" : "flex-start"}
            style={{
              marginLeft: matchesSM ? 0 : "4em",
              marginBottom: matchesSM ? "1em" : 0,
              marginTop: matchesSM ? "2em" : 0,
            }}
          >
            <Grid
              item
              component={motion.div}
              initial={{ x: "-800px" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h5"
                style={{
                  fontSize: matchesSM
                    ? matchesXS
                      ? "1.2rem"
                      : "1.3rem"
                    : "1.5rem",
                }}
              >
                Hello
              </Typography>
            </Grid>
            <Grid
              item
              component={motion.div}
              initial={{ x: "-800px" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Typography
                variant="h3"
                style={{
                  fontWeight: "400",
                  fontSize: matchesSM
                    ? matchesXS
                      ? "2rem"
                      : "2.5rem"
                    : "3.5rem",
                }}
              >
                I'm{" "}
                <span
                  style={{
                    color: `${theme.palette.text.main}`,
                    fontFamily: "pacifico",
                    fontSize: matchesSM
                      ? matchesXS
                        ? "2.4rem"
                        : "3rem"
                      : "4rem",
                  }}
                >
                  Abhinav Siwal
                </span>
              </Typography>
            </Grid>
            <Grid
              item
              component={motion.div}
              initial={{ x: "-800px" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Typography
                align={matchesXS ? "center" : undefined}
                variant="h4"
                style={{
                  fontSize: matchesSM
                    ? matchesXS
                      ? "1.8rem"
                      : "2rem"
                    : "3rem",
                }}
              >
                A Full Stack {matchesXS?<br />:""} Web Developer
              </Typography>
            </Grid>
            <Grid
              item
              style={{ marginTop: matchesSM ? "1em" : "2em" }}
              component={motion.div}
              initial={{ x: "-900px" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button variant="contained" className={classes.aboutButton}>
                More about me
              </Button>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                style={{ marginTop: "1rem" }}
                component={motion.div}
                initial={{ x: "-900px" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/abhinav_siwal8/"
                    target="_blank"
                  >
                    <InstagramIcon
                      style={{
                        fontSize: "2rem",
                        color: theme.palette.text.main,
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/abhinav-siwal-a9a3591aa/"
                    target="_blank"
                  >
                    <LinkedInIcon
                      style={{
                        fontSize: "2rem",
                        color: theme.palette.text.main,
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/abhinavsiwal77/"
                    target="_blank"
                  >
                    <FacebookIcon
                      style={{
                        fontSize: "2rem",
                        color: theme.palette.text.main,
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://twitter.com/AbhinavSiwal"
                    target="_blank"
                  >
                    <TwitterIcon
                      style={{
                        fontSize: "2rem",
                        color: theme.palette.text.main,
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="space-between">
          <Grid item>
          <Hidden mdUp>
            <Container className={classes.mobileAnimation}>
              <Lottie
                options={mobileAnimation1Options}
                height={"100%"}
                width={"100%"}
              />
            </Container>
          </Hidden>
          </Grid>
          <Grid item>
          <Hidden mdUp>
            <Container className={classes.mobileAnimation}>
              <Lottie
                options={mobileAnimation2Options}
                height={"100%"}
                width={"100%"}
              />
            </Container>
          </Hidden>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: matchesXS ? "1em" : 0 }}
        >
          <Grid
            item
            container
            className={classes.animationContainer}
            justifyContent="center"
            alignItems="center"
          >
            <Lottie
              options={defaultOptions}
              height={
                matchesMD
                  ? matchesSM
                    ? matchesXS
                      ? "18em"
                      : "19em"
                    : "25em"
                  : "28em"
              }
              width={
                matchesMD
                  ? matchesSM
                    ? matchesXS
                      ? "18em"
                      : "25em"
                    : "25em"
                  : "33em"
              }
            />
          </Grid>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Container className={classes.rocketDiv}>
          <Lottie
            options={rocketOptions}
            height={matchesSM ? "10em" : "12em"}
            width={matchesSM ? "10em" : "12em"}
          />
        </Container>
      </Hidden>
      <Hidden mdDown>
        <Container className={classes.animationDiv}>
          <Lottie
            options={options}
            height={matchesSM ? "6em" : "8em"}
            width={matchesSM ? "10em" : "14em"}
          />
        </Container>
      </Hidden>
    </React.Fragment>
  );
};

export default Home;
