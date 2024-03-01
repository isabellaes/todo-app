const EditTodoForm = ({
  todo,
  handleSetEditTitle,
  handleSetEditDescription,
  handleSaveEdit,
  handleClose,
}) => {
  return (
    <div className="edit-todo">
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        placeholder="title"
        value={todo.title}
        onChange={(e) => handleSetEditTitle(e.currentTarget.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        placeholder="description"
        value={todo.description}
        onChange={(e) => handleSetEditDescription(e.currentTarget.value)}
      />
      <button onClick={handleSaveEdit}>Save changes</button>
      <br />
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default EditTodoForm;
