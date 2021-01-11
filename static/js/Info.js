import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Info() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={10} align="center">
                <Typography variant="h4">Info</Typography>
            </Grid>
            <Grid item xs={10} align="center">
                <Button color="primary" to="/" component={Link}>Home</Button>
            </Grid>
        </Grid>
    )
}