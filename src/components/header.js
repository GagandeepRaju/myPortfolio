import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material-Ui imports
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

//CUSTOM COMPONENTS
import Menu from "./menu";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    // backgroundColor: theme.palette.background.default,
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        className={classes.homeContainer}
        justify="space-between"
      >
        <Button component={Link} to="/">
          <DeveloperModeIcon color="secondary" />
        </Button>
        <Button onClick={() => setModal(true)}>
          <MenuIcon color="secondary" />
        </Button>
      </Grid>
      <Modal
        open={modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <Menu setModal={setModal} />
        </div>
      </Modal>
    </React.Fragment>
  );
}
