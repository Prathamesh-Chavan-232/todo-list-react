export default function Todo({ todo, onDelete }) {
  return (
    <div className="todo">
      <div className="todo-details">
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
      </div>

      <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
}
/* 
        Inside onclick we need to pass a Function that will be callled when we click the button
        If we pass onDelete(todo) like this, it will be seen as a function call & this will call the function will rendering the html which we dont want
        So we put it inside an arrow func & we pass the arrow func
*/
