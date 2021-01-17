import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Grid, Typography, Collapse } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Alert from "@material-ui/lab/Alert";

import User from "./User";

export default function Info() {
  const [name, setName] = useState("");
  const [nameField, setNameField] = useState("");

  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function submitName() {
    if (nameField === "") {
      setErrorMessage("Name should not be empty");
      return;
    }

    fetch("/api/create-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameField }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error(data.message);
          });
        }
      })
      .then(({ name, message }) => {
        setName(name);
        setSuccesMessage(message);
      })
      .catch((err) => setErrorMessage(err.message));
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
        <Typography variant="h4">Info</Typography>
      </Grid>
      <Grid item xs={10} align="center">
        <Input
          placeholder="Name"
          required={true}
          onChange={(event) => setNameField(event.target.value)}
        >
          Name
        </Input>
        <Collapse in={succesMessage !== "" || errorMessage !== ""}>
          {succesMessage !== "" ? (
            <Alert
              severity="success"
              onClose={() => {
                setSuccesMessage("");
              }}
            >
              {succesMessage}
            </Alert>
          ) : (
            <Alert
              severity="error"
              onClose={() => {
                setErrorMessage("");
              }}
            >
              {errorMessage}
            </Alert>
          )}
        </Collapse>
        <Button color="secondary" onClick={submitName}>
          Submit
        </Button>
      </Grid>
      <Grid item xs={10} align="center">
        <Button color="primary" to="/" component={Link}>
          Home
        </Button>
      </Grid>
      {name && <User name={name} />}
    </Grid>
  );
}
