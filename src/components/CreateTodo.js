import { useState, useContext } from "react";
import TodoContext from "../context/todos";
import Button from "./Button";

function CreateTodo() {
  const { handleCreate } = useContext(TodoContext);
  const [name, setName] = useState("");

  const handleChange = (evt) => {
    setName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreate(name);
    setName("");
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <input
          className="rounded outline"
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="New Todo"
        />
        <Button>Add Todo</Button>
      </form>
    </div>
  );
}

export default CreateTodo;
