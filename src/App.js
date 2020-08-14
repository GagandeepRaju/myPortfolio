import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

//material ui imports
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import Grid from "@material-ui/core/Grid";

import "./App.css";
// import { gsap } from "gsap";

//components imports
import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <main className="container">
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/nav" component={Menu} />
            <Route path="/skills" component={Skills} />
            <Route path="/mywork" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/not-found" component={() => <div>not found</div>} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
