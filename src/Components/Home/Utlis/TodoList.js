import Todo from "./Todo";
import "../../../App.css";

export default function TodoList(props) {
  const displayTodos = () =>
    props.todoList.map((todo) => {
      return (
        <>
          <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}></Todo>
          <hr></hr>
        </>
      );
    });

  return (
    <div className="container todo-list">
      <h3 className="my-3">Todo List</h3>
      {/* Each List item will need an unique key */}
      {props.todoList.length !== 0 ? (
        displayTodos()
      ) : (
        <h4 className="text-center">No Todos to display</h4>
      )}
    </div>
  );
}
