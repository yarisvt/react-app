import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

type shopProps = {
  match: {
    params: {
      item: string;
    };
  };
};

const Shop: React.FC<shopProps> = ({
  match: {
    params: { item },
  },
}) => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10} alignItems="center">
        <Typography variant="h4">Welcome to the shop page of {item}</Typography>
      </Grid>
      <Grid item xs={10} alignItems="center">
        <Button color="primary" to="/" component={Link}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default Shop;
