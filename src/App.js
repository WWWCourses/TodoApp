import React, {useState,useEffect} from "react";
import './App.css';

import { TodoList } from "./components/todoList";
import { AddTodo } from "./components/addTodo";

function App() {
	const [todos, setTodos] = useState([]);

	function fetchTodos() {
		// console.log(`fetchTodos callled`);

		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(r=>r.json())
		.then(data=> setTodos( [...data].slice(0,5) ))

		return ()=>{
			console.log(`Cleanup`);
		}
	}

	function addTodo(title) {
		const newTodo = {
			title:title,
			completed: false
		};
		setTodos( [...todos, newTodo] )
	}

	useEffect(fetchTodos,[]) // componentDidMount

  return (
    <div className="App">
			<AddTodo addTodo={addTodo}/>
			<TodoList todos={todos}/>
    </div>
  );
}

export default App;
