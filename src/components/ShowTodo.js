import { GoTrash, GoPencil, GoCircle, GoCheckCircle } from "react-icons/go";
import { useState, useContext } from "react";
import TodoContext from "../context/todos";
import EditTodo from "./EditTodo";

function ShowTodo({ todo }) {
  const { handleDeleteTodo } = useContext(TodoContext);
  const [completed, setCompleted] = useState(false);
  const [isEditing, setIsediting] = useState(false);

  const handleEditclick = () => {
    setIsediting((isEditing) => !isEditing);
  };

  const handleSubmit = () => {
    setIsediting(false);
  };

  const handleDoneTodo = () => {
    setCompleted((completed) => !completed);
  };

  let content = <h3>{todo.name}</h3>;
  if (isEditing && !completed) {
    content = <EditTodo onSubmit={handleSubmit} todo={todo} />;
  }
  if (completed) {
    content = <span className="line-through ">{content}</span>;
  }

  return (
    <div className="flex flex-row  mt-3  ">
      <div className="p-1.5 cursor-pointer">
        {completed ? (
          <GoCheckCircle onClick={handleDoneTodo} />
        ) : (
          <GoCircle onClick={handleDoneTodo} />
        )}
      </div>
      <span>{content}</span>
      <GoTrash
        className="ml-3 mt-1.5 cursor-pointer"
        onClick={() => handleDeleteTodo(todo.id)}
      />

      <GoPencil
        className="ml-3 mt-1.5 cursor-pointer"
        onClick={handleEditclick}
      />
    </div>
  );
}

export default ShowTodo;
