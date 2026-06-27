import "./TodoContext";
import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";
import { SubHeading } from "../SubHeading";
import { ToDoForm } from "../ToDoForm";
import { Button } from "../Button";
import { IconPlus } from "../icons";
import { use } from "react";
import { Dialog } from "../Dialog";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodo = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

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

  const editTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === selectedTodo.id) {
          return {
            ...t,
            description,
          };
        }
        return t;
      });
    });
  };

  return (
    <TodoContext
      value={{
        todos,
        completed,
        addTodo,
        toogleTodoCompleted,
        removeTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
