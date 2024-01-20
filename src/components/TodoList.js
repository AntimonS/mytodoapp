import ShowTodo from "./ShowTodo";

function TodoList({ todos }) {
  let listCssStyle = "mt-5 flex flex-col items-center";
  if (todos) {
    listCssStyle += " border rounded-md border-x-black shadow-md  ";
  }

  const renderedTodos = todos.map((todo) => (
    <ShowTodo key={todo.id} todo={todo} />
  ));

  return (
    <div>
      <div className={listCssStyle}>{renderedTodos}</div>
    </div>
  );
}

export default TodoList;
