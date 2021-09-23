import React,{useState} from "react";
import {
  Grid,
  Container,
  Hidden,
  Typography,
  IconButton,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import axios from "axios";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    backgroundImage: `url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  formContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%",
    paddingTop: "2rem",
    minHeight: "100vh",
  },
  textFieldOutline: {
    ...theme.typography.body1,
    borderWidth: "1px",
    borderColor: `${theme.palette.text.main} !important`,
    color:theme.palette.secondary.main,
  },
  form: {
    ...theme.border,
    padding: "1rem",
    borderRadius: "20px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  })

  const nameBlurHandler=()=>{
    console.log(name);
    if(name.trim().length===0){
      setNameError("Name must not be empty");
    }
    else{
      setNameError("")
    }
  }
  const emailBlurHandler=()=>{
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(email)){
      setEmailError("Please enter valid email address");
    }else{
      setEmailError("")
    }
  }

  const messageBlurHandler=()=>{
    if(message.trim().length===0){
      setMessageError("Message must not be empty" );
    }else{
      setMessageError("");
    }
  }

  const onConfirm=()=>{
    setLoading(true);
    axios.get("https://us-central1-my-portfolio-61bfb.cloudfunctions.net/sendMail",{
      params:{
        name:name,
        email:email,
        message:message,
      }
    }).then((res)=>{
      console.log(res);
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setAlert({open:true,message:"Message sent successfully",backgroundColor:"#4BB543"})
    }).catch(err=>{
      console.log(err);
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setAlert({open:true,message:"Semething went wrong, please try again",backgroundColor:"#ff3232"})
    })
  }

  return (
    <Grid container direction="row">
      <Grid item lg={4} xs={12} >
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.formContainer}
          justifyContent="space-around"
        >
          <Grid item>
            <Grid container direction="column" alignItems="center" justifyContent="center">
              <Grid item>
                <Typography variant="h5" align="center" style={{lineHeight:1}}>Contact Me</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" style={{ fontSize: "3rem",marginBottom:"3rem" }}>
                  Get in Touch
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  style={{ marginTop: "0.5rem" }}
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        item
                        style={{ marginTop: "7px", marginRight: "0.5rem" }}
                      >
                        <PhoneIcon
                          style={{
                            color: theme.palette.text.main,
                            fontSize: "1.4rem",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">
                          <a
                            href="tel:+919667247458"
                            style={{
                              textDecoration: "none",
                              color: theme.palette.text.main,
                              fontFamily: "roboto",
                              fontWeight: "600",
                              fontSize: "1.2rem",
                            }}
                          >
                            +91 9667247458
                          </a>
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
                      style={{ marginTop: "-12px" }}
                    >
                      <Grid
                        item
                        style={{ marginTop: "10px", marginRight: "0.5rem" }}
                      >
                        <MailIcon
                          style={{
                            color: theme.palette.text.main,
                            fontSize: "1.4rem",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">
                          <a
                            href="mailto:abhinavsiwal@gmail.com"
                            style={{
                              textDecoration: "none",
                              color: theme.palette.text.main,
                              fontFamily: "roboto",
                              fontWeight: "600",
                              fontSize: "1.2rem",
                            }}
                          >
                            abhinavsiwal@gmail.com
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" alignItems="center" justifyContent="center" style={{marginTop:"0px",marginBottom:"3rem"}}>
                      <Grid item>
                        <IconButton
                          component="a"
                          href="https://www.instagram.com/abhinav_siwal/"
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
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              style={{ maxWidth: "20em" }}
              className={classes.form}
              alignItems="center"
            >
              <Typography
                variant="h4"
                align="center"
                style={{
                  lineHeight: "0.5",
                  fontSize: "1.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Send Message
              </Typography>
              <Grid
                item
                style={{
                  marginBottom: "0.5em",
                  marginTop: "2rem",
                  maxWidth: "20em",
                }}
              >
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.text.main },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.textFieldOutline,
                      focused: classes.textFieldOutline,
                      notchedOutline: classes.textFieldOutline,
                    },
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!nameError.length===0}
                  helperText={nameError}
                  onBlur={nameBlurHandler}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.text.main },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.textFieldOutline,
                      focused: classes.textFieldOutline,
                      notchedOutline: classes.textFieldOutline,
                    },
                    className:classes.input,
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!emailError.length===0}
                  helperText={emailError}
                  onBlur={emailBlurHandler}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Message"
                  id="message"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.text.main },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.textFieldOutline,
                      focused: classes.textFieldOutline,
                      notchedOutline: classes.textFieldOutline,
                    },
                    style:{padding:"18.5px 19px"}
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={!messageError.length===0}
                  helperText={messageError}
                  onBlur={messageBlurHandler}
                />
              </Grid>
              <Grid item>
                <Button
                  style={{
                    ...theme.border,
                    borderRadius: "20px",
                    color: theme.palette.text.main,
                    padding: "0.7rem",
                    marginTop: "0.5rem",
                  }}
                  endIcon={!loading?<SendIcon />:undefined}
                  disabled={
                    nameError.length!==0 ||
                    emailError.length!==0 ||
                    messageError.length!==0
                  }
                  onClick={onConfirm}
                >
                  {loading?<CircularProgress size={30} style={{color:theme.palette.text.main}} />: "Send Message"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar 
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor }}}
        anchorOrigin={{vertical:"top",horizontal:"center"}}
        onClose={()=>setAlert({...alert,open:false})}
        autoHideDuration={4000}
      />
      <Grid item lg={8}>
        <Hidden mdDown>
          <Container
            className={classes.imgContainer}
            style={{ color: "transparent" }}
          >
            a
          </Container>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Contact;
