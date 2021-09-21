import React, { useState } from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Timeline from "./Timeline";

import aboutImg from "../../assets/about.jpeg";
import Progress from "./Progress";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    minHeight:"100vh",
    width: "100%",
    padding: "1rem",
    // margin:"1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
    },
  },
  imgContainer: {
    ...theme.border,
    height: "30em",
    width: "30em",
    borderRadius: "20px",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22em",
      height: "22em",
    },
  },
  aboutImg: {
    height: "28em",
    width: "28em",
    [theme.breakpoints.down("xs")]: {
      width: "20em",
      height: "20em",
    },
  },
  active: {
    ...theme.border,
    borderRadius: "20px",
    color: theme.palette.text.main,
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [showEducation, setShowEducation] = useState(false);

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS=useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justifyContent="center"
    >
      <Grid item>
        <Grid
          container
          direction="column"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <Grid item>
            <Typography variant="h5" align="center">
              Main-info
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              style={{ color: theme.palette.secondary.main }}
            >
              About Me
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md style={{ maxWidth: "32em" }}>
            <Container
              className={classes.imgContainer}
              component={motion.div}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{type:"spring", duration:1}}
            >
              <img src={aboutImg} alt="About" className={classes.aboutImg} />
            </Container>
          </Grid>
          <Grid
            item
            md
            style={{
              maxWidth: matchesSM ? "30em" : "35em",
              paddingLeft: matchesSM ? 0 : "2rem",
            }}
            component={motion.div}
            initial={{ x: "+100vw" }}
            animate={{ x: 0 }}
            transition={{type:"spring", duration:1,delay:1.5}}
          >
            <Typography
              paragraph
              variant="body1"
              align={matchesSM ? "center" : undefined}
            >
              Hi! Myself Abhinav Siwal. I am a Web-Developer Currently working
              as a FrontEnd Developer & as a freelancer.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              align={matchesSM ? "center" : undefined}
            >
              I’m passionate about building & designing delightful experiences
              with the combination of business, marketing, UX/UI design and
              Frontend Dev skills to make customers and users satisfied when
              they’re using productsbr and services online.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              align={matchesSM ? "center" : undefined}
            >
              If you have a website or mobile app idea in mind or you need some
              advice about product design, feel free to contact me.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" style={{ margin: "3rem 0" }}>
          <Grid item>
            <Grid
              container
              justifyContent="center"
              style={{ marginBottom: "2rem" }}
            >
              <Grid item>
                <Button
                  onClick={() => setShowEducation(false)}
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    fontFamily: "raleway",
                    padding: "1rem",
                  }}
                  className={!showEducation ? classes.active : ""}
                >
                  Skills
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => setShowEducation(true)}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: "raleway",
                    padding: "1rem",
                  }}
                  className={showEducation ? classes.active : ""}
                >
                  Education
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {!showEducation && <Progress />}
            {showEducation && <Timeline />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
