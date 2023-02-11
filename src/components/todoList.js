import React, {useContext} from "react";
import { TodosContext } from "../todoContext";

function TodoList() {
	const todos = useContext(TodosContext);

	console.log(todos);
	return <>
		{console.log(`TodoList Returned`)}
		<ul>
			{todos.map(todo=><li key={todo.id}>{todo.id} - {todo.title}</li>)}
		</ul>
	</>
}

export {TodoList}