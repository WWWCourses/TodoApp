import React, {useState,useContext} from "react";
import { TodosContext } from "../todoContext";

function AddTodo() {
	const [todoTitle, setTodoTitle] = useState("");

	const {_, addTodo} = useContext(TodosContext);

	return <form action="">
		<input
		type="text"
		placeholder="add new todo"
		value={todoTitle}
		onChange={ e=>setTodoTitle(e.currentTarget.value) }
		/>
		{/* <button type="button" onClick={e=>addTodo(todoTitle)}>Add</button> */}
		<button onClick={e=>{
			e.preventDefault();
			addTodo(todoTitle);
			setTodoTitle("");

		}}>Add</button>
	</form>
}

export {AddTodo}