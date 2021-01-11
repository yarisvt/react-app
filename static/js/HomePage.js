import React, {useState} from "react";
import {Button, ButtonGroup, Grid} from "@material-ui/core";
import {BrowserRouter as Router, Link, Route, Switch,} from "react-router-dom";

import Info from "./Info";
import About from "./About";
import Shop from "./Shop";

export default function App() {

    function renderHomePage() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={3} align="center">
                    <ButtonGroup disableElevation variant="contained"
                                 color="primary">
                        <Button color="primary" to="/info"
                                component={Link}>Info</Button>
                        <Button color="primary" to="/about"
                                component={Link}>About</Button>
                        <Button color="primary" to="/shop/yeet"
                                component={Link}>Shop</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        )
    }

    return (
        <Router>
            <Switch>
                <Route
                    exact path="/"
                    render={renderHomePage}
                />
                <Route exact path="/info" component={Info}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/shop/:item"
                       render={props => <Shop {...props} />}/>
            </Switch>
        </Router>
    )
}