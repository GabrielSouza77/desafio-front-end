import React, { useEffect, useState } from "react";
import { Typography, Paper, Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import TodoForm from "./componentes/TodoForm";
import ListaTodo from "./componentes/ListaTodo";

const LOCAL_STORAGE_KEY = "desafio-front-todos";

function App() {
  //criando o darkMode
  const [darkMode, setDarkMode] = useState(false);

  const tema = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const tema2 = createMuiTheme({
    palette: {
      type: darkMode ? "light" : "dark",
    },
  });

  //estado da lista de todos
  const [todos, setTodos] = useState([]);

  //armazenando tarefas inicialmente
  useEffect(() => {
    const armazenarTarefas = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (armazenarTarefas) {
      setTodos(armazenarTarefas);
    }
  }, []);

  //armazenando tarefas durante a sessão
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //função de adicionar a tarefa utilizando o hook useState
  function adicionarTarefa(todo) {
    setTodos([todo, ...todos]);
  }

  //função para marcar a tarefa como 'concluída'
  function ativarCompleta(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completa: !todo.completa,
          };
        }
        return todo;
      })
    );
  }

  //função para remover a tarefa
  function removerTarefa(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <ThemeProvider theme={tema}>
      <Paper style={{ minHeight: "120vh" }}>
        <div className="App">
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>
          <Typography style={{ marginBottom: 200, marginTop: 50 }} variant="h2">
            Todo List
          </Typography>
          <ThemeProvider theme={tema2}>
            <Paper style={{ height: "10vh", width: "50vh", padding: 30 }}>
              <TodoForm adicionarTarefa={adicionarTarefa}></TodoForm>
            </Paper>
          </ThemeProvider>
          <ListaTodo
            todos={todos}
            ativarCompleta={ativarCompleta}
            removerTarefa={removerTarefa}
          ></ListaTodo>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
