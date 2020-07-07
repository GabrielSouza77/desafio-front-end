import React from "react";
import { Typography, ListItem, IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function Todo({ todo, ativarCompleta, removerTarefa }) {
  function lidarClickCheckbox() {
    ativarCompleta(todo.id);
  }

  function lidarClickRemover() {
    removerTarefa(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completa} onClick={lidarClickCheckbox}></Checkbox>
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completa ? "line-through" : null,
        }}
      >
        {todo.tarefa}
      </Typography>
      <IconButton color="inherit" onClick={lidarClickRemover}>
        <DeleteIcon></DeleteIcon>
      </IconButton>
    </ListItem>
  );
}

export default Todo;
