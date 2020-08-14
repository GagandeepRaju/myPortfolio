import React, { useEffect } from "react";

//Material-Ui imports
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//gsap imports
import { gsap } from "gsap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  homeContainer: {},
  introSub: {
    fontSize: ".5em",
  },
  stackBtn: {
    marginTop: "2em",
    fontFamily: "roboto",
    overflow: "hidden",
    backgroundColor: "#000000",
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.light,
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();

  const skills = [
    { name: "ReactJs", variant: "h2", animeEl: "reactTypo", id: "react" },
    { name: "Python", variant: "h2", id: "python" },
    { name: "Vanilla JavaScript", variant: "h2", id: "javascript" },
  ];

  useEffect(() => {
    let intro = gsap.timeline();

    intro
      .fromTo(
        "#name",
        { x: -1000, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: "elastic" },
        0
      )
      .fromTo(
        "#react",
        { x: 1000, opacity: 0 },
        { x: 0, duration: 1.5, opacity: 1, ease: "elastic" },
        0.5
      )
      .fromTo(
        "#javascript",
        { x: "100%", opacity: 0 },
        { x: 0, duration: 1.5, opacity: 1, ease: "elastic" },
        0.5
      )
      .fromTo(
        "#python",
        { x: "-100%", opacity: 0 },
        { x: 0, duration: 1.5, opacity: 1, ease: "elastic" },
        0.5
      )
      .fromTo(
        "#stackBtn",
        { y: 500, opacity: 0 },
        { y: 0, duration: 2, opacity: 1, ease: "elastic" },
        2
      );
  }, []);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.homeContainer}
    >
      <Typography variant="h1" align="center" id="name">
        Hi, I am Gagan
        <br />I am Full Stack Developer
        <br />
        <span className={classes.introSub}>
          I can develop Web applications with
        </span>
      </Typography>
      {skills.map((skill) => (
        <Typography key={skill.name} id={skill.id} variant={skill.variant}>
          {skill.name}
        </Typography>
      ))}
      <Button
        variant="contained"
        className={classes.stackBtn}
        id="stackBtn"
        component={Link}
        to="/skills"
      >
        My Full Skill Stack
      </Button>
    </Grid>
  );
}
