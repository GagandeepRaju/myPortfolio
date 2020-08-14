import React, { useState, useEffect } from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
//icon imports
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Joi from "joi-browser";
import emailjs from "emailjs-com";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: "2em",
  },
  form: {
    width: "80vW",
  },
  email: {
    marginLeft: "3.5em",
  },
  btn: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.light,
    },
  },
  message: {
    // display: "none",
    width: "20em",
    padding: "1em",
    color: theme.palette.primary.dark,
    textAlign: "center",
    fontSize: "2em",
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [res, setRes] = useState(false);
  const [sbtBtn, setsbtBtn] = useState(true);
  const schema = {
    Email: Joi.string().required().email().label("Email"),
    Message: Joi.string().required().label("Message").min(50),
    Name: Joi.string().min(5).label("Name"),
    Subject: Joi.string().label("Subject").required().min(30),
  };
  const formInputs = [
    { label: "Name" },
    { label: "Email" },
    { label: "Subject" },
    { label: "Message", multiline: true },
  ];

  const handleSubmit = () => {
    emailjs
      .sendForm(
        "gmail",
        "template_MJCF63lb",
        "#contactForm",
        "user_NXjLG4bZBxrFHhyB1TJXI"
      )
      .then(
        (result) => {
          setRes(true);
        },
        (error) => {}
      );
  };

  const validateProperty = ({ id, value }) => {
    const obj = { [id]: value };
    const nschema = { [id]: schema[id] };
    const { error } = Joi.validate(obj, nschema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    //
    const error = errors;
    const errorMessage = validateProperty(input);
    const empty = document.querySelectorAll("input");
    const txtA = document.querySelector("textarea");
    for (let item of empty) {
      if (item.value !== "" && txtA.value.length >= 50) {
        setsbtBtn(false);
      } else {
        setsbtBtn(true);
      }
    }

    if (errorMessage) {
      error[input.id] = errorMessage;
      setError(true);
    } else {
      delete error[input.id];
      setError(false);
    }

    const ndata = data;
    ndata[input.id] = input.value;
    setData(ndata);
    setErrors(error);
  };

  useEffect(() => {
    //
  }, []);
  return (
    <Grid
      container
      direction="column"
      spacing={4}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <IconButton
              color="secondary"
              component="a"
              target="_blank"
              href="https://github.com/GagandeepRaju"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="secondary"
              component="a"
              target="_blank"
              href="https://www.linkedin.com/in/gagandeepr/"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="secondary"
              component="a"
              target="_blank"
              href="https://twitter.com/raju_gagandeep"
            >
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <EmailIcon className={classes.email} />
        <Typography>raju.gagandeep@gmail.com</Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <form className={classes.form} id="contactForm">
          {formInputs.map((ele) => (
            <TextField
              color="secondary"
              variant="filled"
              fullWidth
              error={error}
              id={ele.label}
              key={ele.label}
              label={ele.label}
              multiline={ele.multiline ? true : false}
              rows={ele.multiline ? 4 : 1}
              helperText={errors[ele.label]}
              className={classes.input}
              onChange={handleChange}
            />
          ))}
        </form>
      </Grid>
      <Grid item>
        <Button
          disabled={sbtBtn}
          variant="contained"
          onClick={handleSubmit}
          className={classes.btn}
        >
          Submit
        </Button>
      </Grid>
      {res && (
        <Grid item>
          <Paper elevation={3} className={classes.message}>
            Your Message has been Sent
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}
