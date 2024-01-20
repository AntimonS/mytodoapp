import { createContext, useState } from "react";

const TodoContext = createContext();

const initialTodos = [
  { name: "buy milk", id: "23fds", completed: false },
  { name: "buy bread", id: "23f676ds", completed: false },
];
function Provider({ children }) {
  const [todos, setTodos] = useState(initialTodos);

  const handleEditTodo = (id, newName) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: newName };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCreate = (name) => {
    const updatedTodos = [
      ...todos,
      { id: crypto.randomUUID(), name, completed: false },
    ];
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, handleCreate, handleDeleteTodo, handleEditTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { Provider };
export default TodoContext;
