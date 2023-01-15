function renderTodos(todos){
	console.log(todos);
	nodes.ul.innerHTML = "";
	todos.forEach(todo => {
		const li = `<li data-id="${todo.id}">${todo.id}. ${todo.title}  <span class="btnDelete">X</span></li>`;
		nodes.ul.innerHTML += li;
	});
}

function addTodo(todos) {
	// get last todo id:
	let id = todos[todos.length-1].id;

	// add to todos
	const newTodo = {
		id:id,
		title: nodes.input.value,
		complete:false
	}

	todos = [...todos, newTodo];
	return todos;
}

function deleteTodo(todos, id) {

	let idx = todos.findIndex(todo=>{
		console.log(`todo.id: ${todo.id}`);
		return todo.id===id
	});

	if(idx!== -1){
		todos.splice(idx,1);
	}

	return todos
}

const nodes = {
	output:document.querySelector('.output'),
	input:document.querySelector('input'),
	btnAdd:document.querySelector('button'),
	ul:document.querySelector('ul')
}

// State
let todos = [];
// fetch todos
const url="http://localhost:3000/todos";

fetch(url)
.then(r=>r.json())
.then(data=>{
	todos=data;
	renderTodos(todos);
	console.dir(todos);
});

nodes.btnAdd.addEventListener('click', function(e){
	// prevent default action on submit button click
	e.preventDefault();

	todos = addTodo(todos);
	renderTodos(todos);
})

nodes.ul.addEventListener('click', function (e) {
	// if btnDelete is clicked:
	if(e.target.className=='btnDelete'){
		let id = e.target.parentElement.dataset.id*1;
		todos = deleteTodo(todos, id)

		// render state
		renderTodos(todos)
	}
})


