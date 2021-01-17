import React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function User({ name }) {
  return (
    <Grid item xs={10} align="center">
      <Typography variant="h6">
        Welcome {name} to this beautiful website!
      </Typography>
    </Grid>
  );
}
