import React, {useState,useEffect} from "react";

function AddTodo({addTodo}) {
	const [todoTitle, setTodoTitle] = useState("");
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