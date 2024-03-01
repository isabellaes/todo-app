const ToDo = ({ todo, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div className="todo-item">
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <label htmlFor="done">Done</label>
      <input id="done" type="checkbox" value={true} />
      <div className="buttons">
        <button onClick={handleEditTodo}>Edit</button>
        <button onClick={handleDeleteTodo} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
