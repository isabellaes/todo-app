import Header from "./components/header/Header";
import List from "./components/todoList/List";
import data from "../todos.json";
import { useState } from "react";
import AddTodoForm from "./components/addTodo/AddTodoForm";
import EditTodoForm from "./components/editTodo/EditTodoForm";

function App() {
  const [todos, setTodos] = useState(data.todos);
  const [inputTitle, setInputTitle] = useState();
  const [inputDescription, setInputDescription] = useState();
  const [editTodo, setEditTodo] = useState();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  function handleAddTodo() {
    if (inputTitle && inputDescription) {
      const newTodo = {
        id: new Date().getTime(),
        title: inputTitle,
        description: inputDescription,
      };
      const newList = [newTodo, ...todos];
      setTodos(newList);
    }
  }

  function handleDeleteTodo(index) {
    const editedList = todos.toSpliced(index, 1);
    setTodos(editedList);
  }

  function handleSetEditModalOpen(todo) {
    setEditTodo(todo);
    setEditModalOpen(true);
  }

  function handleSetEditTitle(title) {
    setEditTodo({ ...editTodo, title: title });
  }
  function handleSetEditDescription(description) {
    setEditTodo({ ...editTodo, description: description });
  }

  function handleSaveEdit() {
    const index = todos.findIndex((todo) => todo.id === editTodo.id);
    const editedList = todos.toSpliced(index, 1, editTodo);
    setTodos(editedList);
    setEditTodo(null);
  }
  return (
    <div className="app">
      <Header />
      <h1>Todos: {todos.length}</h1>
      <button onClick={() => setAddModalOpen(true)}>Add new todo</button>
      <div className="content">
        <main>
          <List
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleSetEditModalOpen={handleSetEditModalOpen}
          />
        </main>
        <aside>
          {addModalOpen ? (
            <AddTodoForm
              setInputTitle={setInputTitle}
              setInputDescription={setInputDescription}
              handleAddTodo={handleAddTodo}
              setAddModalOpen={() => setAddModalOpen(false)}
            />
          ) : (
            <></>
          )}

          {editModalOpen ? (
            <EditTodoForm
              todo={editTodo}
              handleSetEditTitle={handleSetEditTitle}
              handleSetEditDescription={handleSetEditDescription}
              handleSaveEdit={handleSaveEdit}
              handleClose={() => setEditModalOpen(false)}
            />
          ) : (
            <></>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
