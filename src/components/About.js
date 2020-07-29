import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  about: {
    fontFamily: "Roboto",
    fontWeight: 300,
    marginLeft: "5em",
    marginRight: "5em"
  }
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h4">Sef Tarbell</Typography>
        <Typography className={classes.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a. Eget magna fermentum iaculis eu non diam. In fermentum et sollicitudin ac. Sapien nec sagittis aliquam malesuada bibendum. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Eu non diam phasellus vestibulum lorem sed. Praesent tristique magna sit amet. Erat velit scelerisque in dictum. Ac tortor dignissim convallis aenean et tortor. In eu mi bibendum neque egestas. Elementum nisi quis eleifend quam adipiscing. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Urna condimentum mattis pellentesque id.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">Education</Typography>
        <Typography className={classes.about}>
          Nec dui nunc mattis enim ut tellus. Vel pharetra vel turpis nunc eget. Ornare massa eget egestas purus viverra accumsan in. Viverra justo nec ultrices dui sapien. Scelerisque felis imperdiet proin fermentum. Pellentesque elit ullamcorper dignissim cras tincidunt. Non diam phasellus vestibulum lorem sed risus. Mi bibendum neque egestas congue quisque egestas diam in. Adipiscing enim eu turpis egestas pretium aenean pharetra. Egestas dui id ornare arcu odio ut sem nulla. Egestas tellus rutrum tellus pellentesque eu tincidunt. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Duis ultricies lacus sed turpis. At imperdiet dui accumsan sit amet nulla.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">Work History</Typography>
        <Typography className={classes.about}>
          Et netus et malesuada fames ac turpis. Vitae suscipit tellus mauris a diam maecenas sed. Blandit libero volutpat sed cras. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Feugiat sed lectus vestibulum mattis ullamcorper velit. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Eget velit aliquet sagittis id consectetur purus ut faucibus. Est ullamcorper eget nulla facilisi etiam. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Fermentum iaculis eu non diam phasellus vestibulum lorem. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Odio euismod lacinia at quis. Id porta nibh venenatis cras sed felis. Cras semper auctor neque vitae. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Risus nec feugiat in fermentum posuere urna nec tincidunt. Aliquam purus sit amet luctus venenatis lectus magna. Nisl tincidunt eget nullam non nisi est.
        </Typography>
      </Grid>
    </Grid>
  )
}