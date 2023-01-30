import React, { useState, useEffect } from "react";
import AddTodo from "../../Utlis/AddTodo";
import TodoList from "../../Utlis/TodoList";
import "../../App.css";
export const Home = () => {
	let initTodo;

	if (localStorage.getItem("todoList") === null) {
		initTodo = [];
	} else {
		initTodo = JSON.parse(localStorage.getItem("todoList"));
	}

	console.log(initTodo);
	const addTodo = (title, desc) => {
		var i = todoList.length + 1;
		const newTodo = {
			sno: i,
			title: title,
			desc: desc,
		};
		console.log(newTodo);
		setTodos([...todoList, newTodo]);
	};

	const onDelete = todo => {
		setTodos(todoList.filter(elm => elm !== todo));
		localStorage.setItem("todoList", JSON.stringify(todoList));
	};

	// Todolist data & useState to change that data
	var [todoList, setTodos] = useState(initTodo);

	// Todo - UseEffect to add todoList to local storage.
	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList]);

	return (
		<div>
			<AddTodo AddTodo={addTodo}></AddTodo>
			<TodoList todoList={todoList} onDelete={onDelete}></TodoList>
		</div>
	);
};
