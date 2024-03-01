import ToDo from "./ToDo";
import data from "../../../todos.json";
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

const List = () => {
  const [todos, setTodos] = useState(data.todos);
  const [inputTitle, setInputTitle] = useState();
  const [inputDescription, setInputDescription] = useState();
  const [editTodo, setEditTodo] = useState();

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

  function handleSetEditTodo(todo) {
    setEditTodo({ ...todo });
  }

  function handleSetEditTitle(title) {
    setEditTodo({ ...editTodo, title: title });
  }
  function handleSetEditDescription(description) {
    setEditTodo({ ...editTodo, description: description });
  }

  function handleSaveEdit() {
    const editedTodo = { ...editTodo };
    const index = todos.findIndex((todo) => todo.id === editedTodo.id);
    const editedList = todos.toSpliced(index, 1, editedTodo);
    setTodos(editedList);
    setEditTodo(null);
  }

  return (
    <div className="content">
      <main>
        <h1>Todos: {todos.length}</h1>
        {editTodo ? (
          <EditTodoForm
            todo={editTodo}
            handleSetEditTitle={handleSetEditTitle}
            handleSetEditDescription={handleSetEditDescription}
            handleSaveEdit={handleSaveEdit}
            handleClose={() => setEditTodo(null)}
          />
        ) : (
          <></>
        )}
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="todo">
              <ToDo
                todo={todo}
                handleDeleteTodo={() => handleDeleteTodo(index)}
                handleEditTodo={() => handleSetEditTodo(todo)}
              />
            </li>
          ))}
        </ul>
      </main>
      <aside>
        <AddTodoForm
          setInputTitle={setInputTitle}
          setInputDescription={setInputDescription}
          handleAddTodo={handleAddTodo}
        />
      </aside>
    </div>
  );
};

export default List;
