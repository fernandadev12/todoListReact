import "./todo-item.style.css";
import { IconPencil, IconTrash } from "../icons";
import { use } from "react";
import TodoContext from "../TodoProvider/TodoContext";

export function ToDoItem({ item }) {
  const styles = ["todo-item"];
  const { toogleTodoCompleted, removeTodo, openFormTodoDialog } =
    use(TodoContext);
  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toogleTodoCompleted(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => removeTodo(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => openFormTodoDialog(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
