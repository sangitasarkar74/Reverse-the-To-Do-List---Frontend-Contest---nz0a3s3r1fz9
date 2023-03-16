import React, { useState } from "react";
import "../styles/App.css";

function ToDo({ id, createdAt, todos, handleSubmit }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <tr>
            <td>
              <p>{todo.id}</p>
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <p>{todo.createdAt}</p>
            </td>
          </tr>
        );
      })}
    </>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "20:30",
    },
    {
      id: "todo2",
      createdAt: "18:00",
    },
  ]);
  const handleSubmit = () => {
    setTodos(todos);
  };

  return (
    <div id="main">
      <button onClick={handleSubmit}>Reverse</button>
      <table>
        <tbody>
          <ToDo
            todoId={id}
            createdAt={createdAt}
            todos={todos}
            handleSubmit={handleSubmit}
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
