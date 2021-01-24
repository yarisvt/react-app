import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

type todoProps = {
  name: string;
  removeElement: () => void;
};

const Todo: React.FC<todoProps> = ({ name, removeElement }) => {
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
    minWidth: "400px",
    maxWidth: "800px",
  };

  return (
    <>
      <Grid item xs={10}>
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
};

export default Todo;
