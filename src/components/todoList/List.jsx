import ToDo from "./ToDo";

const List = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li className="todo" key={index}>
          <ToDo
            todo={todo}
            handleDeleteTodo={() => handleDeleteTodo(index)}
            handleEditTodo={() => handleEditTodo(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
