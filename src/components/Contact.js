import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
}));

export default function Contact(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h4">Contact Sef Tarbell</Typography>
        <Typography>There will be a form here...</Typography>
      </Grid>
    </Grid>
  )
}