import { Button } from "./components/Button";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { TextInput } from "./components/TextInput";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { use, useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { TodoProvider } from "./components/TodoProvider/index.jsx";
import TodoContext from "./components/TodoProvider/TodoContext";
import { TodoGroup } from "./components/TodoGroup";
import { EmptyState } from "./components/EmptyState";

function App() {
  const {
    todos,
    addTodo,
    toogleTodoCompleted,
    showDialog,
    openFormTodoDialog,
    closeFormTodoDialog,
    selectedTodo,
    editTodo,
  } = use(TodoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else {
      addTodo(formData);
    }
    closeFormTodoDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <Dialog></Dialog>
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para estudar"
            itens={todos.filter((t) => !t.completed)}
          ></TodoGroup>
          {todos.length == 0 && <EmptyState />}
          <TodoGroup
            heading="Concluído"
            itens={todos.filter((t) => t.completed)}
          ></TodoGroup>

          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              />
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
