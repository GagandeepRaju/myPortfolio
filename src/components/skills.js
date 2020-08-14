import React, { useEffect } from "react";

//Material-Ui imports
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//Animation imports
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  skillContainer: {
    paddingTop: "3em",
  },
  skill: {
    //
  },
  listContainer: {},
  ul: {
    paddingTop: "2em",
  },
  progress: {
    color: theme.palette.secondary.light,
  },
}));

export default function Skills(props) {
  const classes = useStyles();
  const skillsSections = [
    {
      name: "Front-End",
      skills: [
        "ReactJS",
        "Vanila JavaScript",
        "Python",
        "jQuery",
        "Bootstrap",
        "Material-UI",
        "Bodymovin",
      ],
    },
    {
      name: "Back-End",
      skills: [
        "NodeJS",
        "ExpressJS",
        "Python",
        "MongoDB",
        "Mongoose",
        "Lodash",
        "Winston",
        "JWT",
      ],
    },
    {
      name: "Design Software",
      skills: ["Cinema4D", "Photoshop", "After Effects", "Adobe XD"],
    },
  ];
  useEffect(() => {
    let skillLine = gsap.timeline();

    skillLine.fromTo(
      "#skills",
      { x: -1000, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: "elastic" },
      0
    );
  }, []);

  return (
    <Grid
      container
      className={classes.skillContainer}
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Grid container id="skills" justify="center">
        <Typography
          component="header"
          variant="h3"
          style={{ lineHeight: "1.5em" }}
        >
          I always learn what's latest in the software industry, these are some
          of the top picks
        </Typography>
      </Grid>

      <Grid item>
        <List className={classes.listContainer} subheader={<li />}>
          {skillsSections.map((sectionId) => (
            <li
              key={sectionId.name}
              id={`section-${sectionId.name}`}
              className={classes.listSection}
            >
              <ul className={classes.ul}>
                <Typography component="h2" variant="h3">
                  {sectionId.name}
                </Typography>
                {sectionId.skills.map((skill) => (
                  <ListItem
                    key={`item-${sectionId}-${skill}`}
                    className={classes.skill}
                  >
                    <ListItemText primary={skill} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
