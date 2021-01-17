import React, { useState } from "react";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function About() {
  const [time, setTime] = useState("");

  function getCurrentTime() {
    fetch("/api/time")
      .then((response) => response.json())
      .then((data) => setTime(data.time));
  }

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10} align="center">
        <Typography variant="h4">About</Typography>
        <Typography variant="h6">{time}</Typography>
      </Grid>
      <Grid item xs={10} align="center">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button color="primary" onClick={() => getCurrentTime()}>
            Get Current Time
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={10} align="center">
        <Button className="btn" color="primary" to="/" component={Link}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
}
