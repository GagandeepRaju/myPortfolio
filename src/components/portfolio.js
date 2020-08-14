import React, { useEffect } from "react";

//custome components
import { dataArray } from "./../utilities/data";

//material-ui
import { makeStyles } from "@material-ui/core/styles";

//GSAP
import { gsap } from "gsap";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "2em",
  },
  media: {
    color: theme.palette.primary.main,
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  useEffect(() => {
    let t1 = gsap.timeline();
    t1.fromTo(
      "#react",
      { xPercent: "+50", duration: 2, opacity: 0, ease: "elastic" },
      { xPercent: "0", duration: 2, opacity: 1, ease: "elastic" }
    );
  }, []);

  return (
    <Grid
      container
      direction="row"
      className={classes.card}
      justify="flex-start"
      alignItems="flex-end"
      spacing={3}
    >
      {dataArray.map((data) => (
        <Grid item key={data.id} xs={12} lg={4} md={6} id="react">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={data.imgUrl}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="primary"
                >
                  {data.name}
                </Typography>
                <Typography variant="body2" color="primary" component="p">
                  {data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                color="primary"
                fullWidth
                component={"a"}
                target="_blank"
                href={data.url}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
