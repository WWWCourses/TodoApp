import {useState,useEffect,createContext} from "react";

const TodosContext = createContext();


function TodosContextWrapper(props) {
	const [todos, setTodos] = useState([]);

	function fetchTodos() {
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


	// return Provider wrapper
	return (
		<TodosContext.Provider value={ {todos, addTodo} }>
			{props.children}
		</TodosContext.Provider>
	)
}

export {TodosContextWrapper, TodosContext}