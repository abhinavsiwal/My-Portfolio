import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import content from "./portfolioContent";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2rem",
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.down("sm")]:{
      padding:"1rem",
      paddingTop:"2rem",
    },
    [theme.breakpoints.down("xs")]:{
      padding:"0.5rem",
      paddingTop:"2rem",
    }
  },
  card: {
    ...theme.border,
    borderRadius: "20px",
    // padding:"0.5rem",
    // height: "420px",
  },
  dialog: {
    ...theme.border,
    borderRadius: "20px",
    backgrounColor: theme.palette.primary.main,
  },
  dialogButton: {
    ...theme.border,
    borderRadius: "10px",
    color: theme.palette.text.main,
    fontFamily: "pacifico",
    fontSize: "0.7rem",
    padding: "0.5rem",
    [theme.breakpoints.down("xs")]:{
      fontSize:"0.6rem",
      padding:"0.4rem"
    }
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [index, setIndex] = useState("");
  const [open, setOpen] = useState(false);
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const selectedProject = content.filter((element) => element.id === index);

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h5" style={{}}>
              Portfolio
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              style={{
                color: theme.palette.secondary.main,
                fontSize: matchesXS ? "2.2rem" : undefined,
              }}
              gutterBottom
            >
              Latest Work
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          {content.map((item) => (
            
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={item.id}
              style={{ padding: "1rem" }}
            >
              <Card sx={{ maxWidth: "300" }} className={classes.card}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.img}
                  alt="content"
                  />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    style={{ fontSize: "1.4rem" }}
                    >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontFamily: "open-sans", fontWeight: "1rem" }}
                    >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      setIndex(item.id);
                      setOpen(true);
                    }}
                    style={{
                      marginBottom: "0.5rem",
                      marginLeft: "0.5rem",
                      color: theme.palette.text.main,
                      fontFamily: "raleway",
                      fontSize: "0.8rem",
                    }}
                    >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className={classes.dialog}
          PaperProps={{
            style: {
              ...theme.border,
              backgroundColor: theme.palette.primary.main,
              borderRadius:matchesXS?0: "15px",
            },
          }}
          fullScreen={matchesXS}
        >
          <DialogContent>
            {selectedProject.map((item) => (
              <Grid container direction="column" key={item.id}>
                <Grid item>
                  <Typography
                    variant="h4"
                    style={{ fontSize: "1.5rem", marginBottom: "0.5rem",color:theme.palette.text.main }}
                    align="center"
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Carousel
                        NextIcon={<ArrowForwardIosIcon />}
                        PrevIcon={<ArrowBackIosIcon />}
                        navButtonsAlwaysVisible="true"
                        // animation="slide"
                      >
                        {item.imgCar.map((img, i) => (
                          <img
                            src={img}
                            alt="carousel"
                            height="100%"
                            width="100%"
                            key={i}
                          />
                        ))}
                      </Carousel>
                    </Grid>
                    <Grid item style={{ marginTop: matchesXS?"1rem": "0.5rem" }}>
                      <Typography variant="h6">Description-</Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </Grid>
                    <Grid item style={{ marginTop: "0.5rem" }}>
                      <Typography variant="h6">Tools Used-</Typography>
                      <Typography variant="body1">{item.tools}</Typography>
                    </Grid>
                    <Grid item style={{ marginTop:matchesXS?"1rem": "0.5rem" }}>
                      <Button
                        variant="contained"
                        component="a"
                        href={item.web}
                        target="_blank"
                        className={classes.dialogButton}
                      >
                        View Deployment
                      </Button>
                      <Button
                        onClick={() => setOpen(false)}
                        style={{ fontFamily: "raleway",fontSize:matchesXS?"0.7rem":undefined }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
