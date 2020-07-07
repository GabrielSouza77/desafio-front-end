import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";

function ListaTodo({ todos, ativarCompleta, removerTarefa }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          ativarCompleta={ativarCompleta}
          removerTarefa={removerTarefa}
        ></Todo>
      ))}
    </List>
  );
}

export default ListaTodo;
