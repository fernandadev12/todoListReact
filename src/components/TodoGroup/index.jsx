import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import TodoContext from "../TodoProvider/TodoContext";

export function TodoGroup({ heading, itens }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {itens.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
}
