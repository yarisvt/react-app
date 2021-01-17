import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function Todo({ name, removeElement }) {
  const [complete, setComplete] = useState(false);

  const ColoredTypography = withStyles({
    root: {
      color: complete ? "grey" : "black",
    },
  })(Typography);

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    minWidth: "400px",
    maxWidth: "800px",
  };

  return (
    <>
      <Grid item xs={10} align="center">
        {complete ? (
          <div style={styles}>
            <DeleteForeverIcon className="hover" onClick={removeElement} />
            <span>
              <del>
                <ColoredTypography variant="h6">{name}</ColoredTypography>
              </del>
            </span>
            <span>
              <CheckCircleOutlineIcon
                className="hover"
                onClick={() => setComplete((prev) => !prev)}
              />
            </span>
          </div>
        ) : (
          <div style={styles}>
            <DeleteForeverIcon className="hover" onClick={removeElement} />
            <span>
              <ColoredTypography variant="h6">{name}</ColoredTypography>
            </span>
            <span>
              <CheckCircleOutlineIcon
                className="hover"
                onClick={() => setComplete((prev) => !prev)}
              />
            </span>
          </div>
        )}
      </Grid>
    </>
  );
}
