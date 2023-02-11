import './App.css';

import { TodoList } from "./components/todoList";
import { AddTodo } from "./components/addTodo";
import { TodosContextWrapper } from "./todoContext";
import RouterDemo from "./components/routerDemo";

function App() {
  return (
		<RouterDemo/>
    // <div className="App">
		// 	<TodosContextWrapper>
		// 		<AddTodo/>
		// 		<TodoList/>
		// 	</TodosContextWrapper>
    // </div>
  );
}

export default App;
