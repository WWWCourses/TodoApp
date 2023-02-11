import {createContext} from "react";

const Context = createContext(defaultValue);


function ContextDemo() {

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


	return (<div>
	  <Context.Provider value={}>
		<Component1/>
	  </Context.Provider>

	</div>);
  }