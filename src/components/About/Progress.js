import React from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./ProgressBar";


const useStyles = makeStyles((theme) => ({
  outerContainer: {
    ...theme.border,
    height: "220px",
    width: "240px",
    padding: "1rem",
    borderRadius: "30px",
    [theme.breakpoints.down("xs")]: {
      height: "170px",
      width: "175px",
    },
  },
  button: {
    ...theme.border,
    borderRadius: "20px",
    color: theme.palette.text.main,
    fontFamily: "pacifico",
    fontSize: "0.7rem",
    padding:"0.5rem",
    "&:hover": {
      backgroundColor: theme.palette.text.light,
    },
    [theme.breakpoints.down("xs")]:{
      fontSize:"0.5rem",
    }
  },
}));

const Progress = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column" style={{ margin: "2rem 0" }}>
      <Grid item>
        <Grid container>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={70} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">HTML</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={80} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">CSS</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={80} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Javascript</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={75} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">React Js</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={70} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Git</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={80} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Material-Ui</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={80} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Node Js</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={60} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">MongoDb</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <ProgressBar value={50} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">DSA</Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ margin: "3rem 0" }}>
        <Typography
          variant="h4"
          style={{ color: theme.palette.secondary.main }}
          align="center"
        >
          Certificates
        </Typography>
        <Grid container style={{ margin: "3rem 0" }}>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    style={{
                      margin: "1rem 0",
                      fontSize: matchesXS ? "1rem" : "undefined",
                    }}
                  >
                    Udemy React Certificate
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    
                    component="a"
                    href="https://www.udemy.com/certificate/UC-40550d97-324d-463b-9f29-2ac2cb8cc9e0/"
                    target="_blank"
                    className={classes.button}
                  >
                    View Certificate
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    style={{
                      margin: "1rem 0",
                      fontSize: matchesXS ? "1rem" : "undefined",
                    }}
                  >
                    Udemy Material-Ui Certificate
                  </Typography>
                  <Button  className={classes.button}>
                    View Certificate
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    style={{
                      margin: "1rem 0",
                      fontSize: matchesXS ? "1rem" : "undefined",
                    }}
                  >
                    HackerRank React Certificate
                  </Typography>
                  <Button
                    
                    component="a"
                    href="https://www.hackerrank.com/certificates/f3be66cc0c49"
                    target="_black"
                    className={classes.button}
                  >
                    View Certificate
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    style={{
                      margin: "1rem 0",
                      fontSize: matchesXS ? "1rem" : "undefined",
                    }}
                  >
                    HackeRrank CSS Certificate
                  </Typography>
                  <Button
                    
                    component="a"
                    href="https://www.hackerrank.com/certificates/44a082d583c1"
                    target="_blank"
                    className={classes.button}
                  >
                    View Certificate
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={6} md={4} style={{ marginBottom: "1rem" }}>
            <Container className={classes.outerContainer}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    style={{
                      margin: "1rem 0",
                      fontSize: matchesXS ? "1rem" : "undefined",
                    }}
                  >
                    HackeRrank Javascript Certificate
                  </Typography>
                  <Button
                    
                    component="a"
                    href="https://www.hackerrank.com/certificates/7e87e925cad7"
                    target="_blank"
                    className={classes.button}
                  >
                    View Certificate
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Progress;
