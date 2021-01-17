import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Grid, Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";

import Todo from "./Todo";

export default function Todos() {
  const [todo, setTodo] = useState("");
  const [todosList, setTodosList] = useState([]);

  const addTodo = () => {
    setTodosList((prevTodo) => [...prevTodo, todo]);
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
      <Grid item xs={10} align="center">
        <Typography variant="h4">Todos</Typography>
      </Grid>
      <Grid item xs={10} align="center">
        <Input
          placeholder="Name"
          required={true}
          onChange={(e) => setTodo(e.target.value)}
        >
          Name
        </Input>
        <Button color="secondary" onClick={() => setTodosList(addTodo)}>
          Add
        </Button>
      </Grid>
      <Grid item xs={10} align="center">
        <Button color="primary" to="/" component={Link}>
          Home
        </Button>
        {todosList.map((todo) => {
          return (
            <Todo
              key={todo}
              name={todo}
              removeElement={() => {
                setTodosList(todosList.filter((t) => t !== todo));
              }}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
