let todos = [
	{
		id:10
	},
	{
		id:2
	},
	{
		id:8
	},
	{
		id:5,
		complete:false
	}
]

let id = 8;
let idx = todos.findIndex(el=>el.id===id);
console.log(`idx: ${idx}`);

if(idx!== -1){
	todos.splice(idx,1);
}

console.log(todos);