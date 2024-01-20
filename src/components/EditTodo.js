import { useState, useContext } from "react";
import TodoContext from "../context/todos";
import Button from "./Button";

function EditTodo({ todo, onSubmit }) {
  const [newName, setNewName] = useState(todo.name);
  const { handleEditTodo } = useContext(TodoContext);

  const handleEditChange = (evt) => {
    setNewName(evt.target.value);
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    handleEditTodo(todo.id, newName);
    onSubmit();
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <label className="flex flex-col p-3">Edit Todo:</label>
      <input
        className="rounded outline"
        onChange={handleEditChange}
        type="text"
        value={newName}
      />
      <Button>Save</Button>
    </form>
  );
}

export default EditTodo;
