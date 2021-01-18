import React, { useState } from "react";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const [time, setTime] = useState("");

  const getCurrentTime = () => {
    fetch("/api/time")
      .then((response) => response.json())
      .then((data) => setTime(data.time));
  };

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10}>
        <Typography variant="h4">About</Typography>
        <Typography variant="h6">{time}</Typography>
      </Grid>
      <Grid item xs={10}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button color="primary" onClick={() => getCurrentTime()}>
            Get Current Time
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={10}>
        <Button className="btn" color="primary" to="/" component={Link}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default About;
