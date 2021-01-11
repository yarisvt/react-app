import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Shop({match: {params}}) {
    console.log(params.item)
    return (
        <Grid container spacing={1} >
            <Grid item xs={10} align="center">
                <Typography variant="h4">Welcome to the shop page of {params.item}</Typography>
            </Grid>
            <Grid item xs={10} align="center">
                <Button color="primary" to="/" component={Link}>Home</Button>
            </Grid>
        </Grid>
    )
}