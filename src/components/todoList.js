import React, {useState,useEffect} from "react";

function TodoList({todos}) {

	return <>
		{console.log(`TodoList Returned`)}
		<ul>
			{todos.map(todo=><li key={todo.id}>{todo.id} - {todo.title}</li>)}
		</ul>
	</>
}

export {TodoList}