import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import TodoContext from "./context/todos";
import { useContext } from "react";

export default function App() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <Header />
      <CreateTodo />
      <TodoList todos={todos} />
    </div>
  );
}
