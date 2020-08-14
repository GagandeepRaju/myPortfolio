import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//material-ui components
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//Animation imports
import { gsap } from "gsap";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    backgroundColor: theme.palette.secondary.light,
    height: "100vH",
  },
  manuOptions: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    transition: "color 1s",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  menuBtn: {
    transition: "background-color 1s",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  const menuOptions = [
    { name: "Intro", to: "/" },
    { name: "Portfolio", to: "/mywork" },
    { name: "Skill Stack", to: "/skills" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    let modal = gsap.timeline();

    modal.fromTo(
      "#modal",
      { xPercent: +100, yPercent: -100, opacity: 0, scale: 0 },
      {
        xPercent: 0,
        yPercent: 0,
        duration: 3,
        opacity: 1,
        scale: 1,
        ease: "elastic",
      },
      0
    );
  }, []);

  return (
    <Grid
      id="modal"
      container
      direction="column"
      className={classes.menuContainer}
    >
      <Grid item container direction="row" justify="flex-end">
        <Button disableRipple onClick={() => props.setModal(false)}>
          <CloseIcon color="primary" />
        </Button>
      </Grid>
      <Grid item container direction="column">
        {menuOptions.map((option) => (
          <Button
            key={option.name}
            component={Link}
            to={option.to}
            className={classes.menuBtn}
            onClick={() => props.setModal(false)}
          >
            <Typography variant="h1" className={classes.manuOptions}>
              {option.name}
            </Typography>
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}
