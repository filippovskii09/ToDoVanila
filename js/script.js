const deleteButton = document.querySelector('#delete-button');
const deleteModalWindow = document.querySelector('.delete-modal');
const out = document.querySelector('.todo__results')
const title = document.querySelector('#title');
const addItemButton = document.querySelector('.todo__add');


window.onload = function() {
	const todoList = [];

	addItemButton.addEventListener('click', function() {
		if (title.value.trim().length > 0) {
		  let temp = {};
		  let titleResult = title.value
		  temp.todo = titleResult;
		  let items = todoList.length
		  todoList[items] = temp;
	 
		  updateToDoList(todoList);
		  title.value = '';
		}
	 });

	function updateToDoList(list) {
		out.innerHTML = '';

		if (list.length === 0) {
			out.innerHTML += '<p>No tasks</p>';
			out.classList.add("no-items")
		}	else {
			list.forEach(function(item) {
				out.innerHTML += '<li class="todo-item">' + 
				'<h2 class="item-title">' + item.todo + '</h2>' +
				'<button class="item-delete">'+ 'X' + '</button>'
				 + '</li>'
			})
			out.classList.remove('no-items')
			const deleteButton = document.querySelector('.item-delete');
			deleteButton.addEventListener('click',function(){ 
				document.body.classList.add("modal-open")
			})
		}
	}

	if(todoList.length === 0) {
		out.innerHTML += '<p>No tasks</p>';
		out.classList.add("no-items")
	} else {
		deleteButton.addEventListener('click', )
	}
}