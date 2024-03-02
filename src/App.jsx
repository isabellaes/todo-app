import Header from "./components/header/Header";
import List from "./components/todoList/List";
import data from "../todos.json";
import { useState } from "react";
import AddTodoForm from "./components/addTodo/AddTodoForm";

function App() {
  const [todos, setTodos] = useState(data.todos);
  const [inputTitle, setInputTitle] = useState();
  const [inputDescription, setInputDescription] = useState();
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

  return (
    <div className="app">
      <Header />
      <h1>Todos: {todos.length}</h1>
      <button className="add-btn" onClick={() => setAddModalOpen(true)}>
        Add new todo
      </button>

      <div className="content">
        <main>
          <List todos={todos} handleDeleteTodo={handleDeleteTodo} />
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
        </aside>
      </div>
    </div>
  );
}

export default App;
