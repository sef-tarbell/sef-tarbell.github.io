import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.common.orange
  },
  mainContainer: {
    marginTop: "5em",
    height: "6em"
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item className={classes.mainContainer}>
        <Typography>Body 1</Typography>
      </Grid>
      <Grid item className={classes.mainContainer}>
        <Typography>Body 2</Typography>
      </Grid>
      <Grid item className={classes.mainContainer}>
        <Typography>Body 3</Typography>
      </Grid>
    </Grid>
  );
}