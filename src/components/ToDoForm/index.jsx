import { TextInput } from "../TextInput";
import { Button } from "../Button";
import "./to-do-form-style.css";

export function ToDoForm({ onSubmit }) {
  return (
    <form action={onSubmit} className="todo-form">
      <TextInput
        name="description"
        placeholder="Digite o item que deseja adicionar "
      />
      <Button>Salvar item </Button>
    </form>
  );
}
