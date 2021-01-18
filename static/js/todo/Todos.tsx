import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Grid, Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";

import Todo from "./Todo";

const Todos: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todosList, setTodosList] = useState<string[]>([]);

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
      <Grid item xs={10} alignItems="center">
        <Typography variant="h4">Todos</Typography>
      </Grid>
      <Grid item xs={10} alignItems="center">
        <Input
          placeholder="Name"
          required={true}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button color="secondary" onClick={addTodo}>
          Add
        </Button>
      </Grid>
      <Grid item xs={10} alignItems="center">
        <Button color="primary" to="/" component={Link}>
          Home
        </Button>
      </Grid>
      <Grid item xs={10} alignItems="center">
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
};

export default Todos;
