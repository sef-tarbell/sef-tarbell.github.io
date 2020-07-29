import {createMuiTheme} from "@material-ui/core/styles";

const fOrange = "#FF9636";
const fGreen = "#DAD870";

export default createMuiTheme({
  palette: {
    common: {
      orange: fOrange,
      green: fGreen
    },
    primary: {
      main: fOrange
    },
    secondary: {
      main: fGreen
    }
  },
  typography: {
    h4: {
      fontFamily: "Marck Script",
      margin: "1em"
    }
  }
})