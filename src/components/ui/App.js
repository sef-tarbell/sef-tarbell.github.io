import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import theme from './Theme';
import LandingPage from "../LandingPage";
import About from "../About";
import Contact from "../Contact";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/"
                 render={(props) => (
                   <LandingPage
                     {...props}
                   />
                 )}
          />
          <Route exact path="/about"
                 component={() => <About />}
          />
          <Route exact path="/contact"
                 component={() => <Contact />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
