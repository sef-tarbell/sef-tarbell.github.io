import React from "react";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom';
import Hidden from "@material-ui/core/Hidden";

import whiteSlash from '../../assets/footer-white-trans.png';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: theme.zIndex.modal + 1,
    position: "absolute"
  },
  adornment: {
    width: "17em",
    verticalAlign: "bottom"
  },
  linksContainer: {
    position: "absolute"
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return <footer className={classes.footer}>
    {/* footer links */}
    <Hidden mdDown>
      <Grid container direction="row" justify="center" className={classes.linksContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item component={Link} to="/">
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item component={Link} to="/about"> About </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item component={Link} to="/contact"> Contact </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
    {/* adornment */}
    <img src={whiteSlash} alt="slash adornment" className={classes.adornment} />
    {/* social links? */}
  </footer>
}
