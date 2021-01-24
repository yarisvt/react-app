import React from "react";

import { Grid, Typography } from "@material-ui/core";

type UserProps = {
  name: string;
};

const User: React.FC<UserProps> = ({ name }) => {
  return (
    <Grid item xs={10}>
      <Typography variant="h6">
        Welcome {name} to this beautiful website!
      </Typography>
    </Grid>
  );
};

export default User;
