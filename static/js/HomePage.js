import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Info from "./info/Info";
import About from "./about/About";
import Shop from "./shop/Shop";
import Todos from "./todo/Todos";
import Test from "./test/Test";

const StyledButton = withStyles({
  root: {
    margin: ".5em",
    borderRadius: "6px",
  },
})(Button);

export default function App() {
  function renderHomePage() {
    return (
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3} align="center">
          <StyledButton
            variant="contained"
            color="primary"
            to="/info"
            disableElevation
            component={Link}
          >
            Info
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            to="/shop/yeet"
            disableElevation
            component={Link}
          >
            Shop
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            to="/todos"
            disableElevation
            component={Link}
          >
            Todos
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            to="/about"
            disableElevation
            component={Link}
          >
            About
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            to="/test"
            disableElevation
            component={Link}
          >
            Test
          </StyledButton>
        </Grid>
      </Grid>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={renderHomePage} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/test"
          render={() => <Test name="Yaris" age={21} hasCar={false} />}
        />
        <Route
          exact
          path="/shop/:item"
          render={(props) => <Shop {...props} />}
        />
      </Switch>
    </Router>
  );
}
