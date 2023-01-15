function deleteTodo(todos, id) {

	let idx = todos.findIndex(todo=>{
		console.log(`todo.id: ${todo.id}`);
		return todo.id===id
	});

	console.log(`id: ${id};idx:${idx}`);

	if(idx!== -1){
		todos.splice(idx,1);
	}

	console.dir(todos);
}

let todos = [
	{
	  "id": 1,
	  "title": "Learn HTML",
	  "completed": false
	},
	{
	  "id": "2",
	  "title": "Learn CSS",
	  "completed": false
	},
	{
	  "id": 3,
	  "title": "Learn JavaScript",
	  "completed": false
	}
  ]

deleteTodo(todos, 2)