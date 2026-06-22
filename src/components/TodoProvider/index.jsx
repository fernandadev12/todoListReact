import "./TodoContext";
import { useState } from "react";
import TodoContext from "./TodoContext";
import { SubHeading } from "../SubHeading";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Props, state e hooks",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 3,
      description: "Ciclo de vida dos componentes",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

  const completed = todos.filter((t) => t.completed);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  const toogleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const removeTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id !== todo.id);
    });
  };

  return (
    <TodoContext
      value={{ todos, completed, addTodo, toogleTodoCompleted, removeTodo }}
    >
      {children}
    </TodoContext>
  );
}
