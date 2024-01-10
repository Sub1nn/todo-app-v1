import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async function (todos) {
  //   const data = await todos.json();
  //   setTodos(data);
  // });
  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
