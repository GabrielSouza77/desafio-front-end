import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { v4 as uuid } from "uuid";

//função para armazenar o estado do objeto todoForm
function TodoForm({ adicionarTarefa }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todo, setTodo] = useState({
    id: "",
    tarefa: "",
    completa: false,
  });

  //função para lidar com a digitação no input
  function lidarTarefa(e) {
    setTodo({ ...todo, tarefa: e.target.value });
  }

  //função para lidar com o submit do botão
  function lidarSubmit(e) {
    e.preventDefault();
    if (todo.tarefa.trim()) {
      adicionarTarefa({ ...todo, id: uuid() });
      //resetando o input
      setTodo({ ...todo, tarefa: "" });
    }
  }

  return (
    <form className="form-todo" onSubmit={lidarSubmit}>
      <TextField
        color="secondary"
        id="outlined-secundary"
        label="A fazer"
        name="tarefa"
        type="text"
        variant="outlined"
        value={todo.tarefa}
        onChange={lidarTarefa}
      ></TextField>
      <IconButton color="inherit" type="submit">
        <AddBoxIcon></AddBoxIcon>
      </IconButton>
    </form>
  );
}

export default TodoForm;
