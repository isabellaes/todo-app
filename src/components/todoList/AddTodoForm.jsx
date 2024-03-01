const AddTodoForm = ({ setInputTitle, setInputDescription, handleAddTodo }) => {
  return (
    <div className="add-todo">
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        placeholder="title"
        onChange={(e) => setInputTitle(e.currentTarget.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={(e) => setInputDescription(e.currentTarget.value)}
      />
      <button onClick={handleAddTodo}>Add ➕</button>
    </div>
  );
};

export default AddTodoForm;
