import React from "react";
import {useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";

import logo from '../../assets/banner-black-orange-trans.png';

function ElevationScroll(props) {
  const {children} = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  appBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3.5em"
  },
  logo: {
    height: "8em"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px"
  }
}));

const routes = [
  {name: "Home", link: "/", index: 0},
  {name: "About", link: "/about", index: 1},
  {name: "Contact", link: "/contact", index: 2},
]

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo} />
            <Tabs className={classes.tabContainer}>
              {routes.map((route, index) => (
                <Tab key={`{$route}${index}`}
                     className={classes.tab}
                     component={Link} to={route.link}
                     label={route.name}
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.appBarMargin} />
    </React.Fragment>
  );
}