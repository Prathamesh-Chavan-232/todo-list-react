import React from "react";
import { useState } from "react";
export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("tile & description can't be empty");
    } else {
      props.AddTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <h3 className="my-3">Add a Todo</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="todoTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add todo
        </button>
      </form>
    </div>
  );
}
