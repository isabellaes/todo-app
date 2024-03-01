import ToDo from "./ToDo";

const List = ({ todos, handleDeleteTodo, handleSetEditModalOpen }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li className="todo">
          <ToDo
            todo={todo}
            handleDeleteTodo={() => handleDeleteTodo(index)}
            handleEditTodo={() => handleSetEditModalOpen(todo)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
