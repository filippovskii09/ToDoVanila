const deleteModalWindow = document.querySelector('.delete-modal'),
 		out = document.querySelector('.todo__results'),
 		input = document.querySelector('#input'),
 		addItemButton = document.querySelector('.todo__add'),
 		yesButton = document.querySelector('#yes'),
 		noButton = document.querySelector('#no');


window.addEventListener('DOMContentLoaded', () => {
	const todoList = [];

	function openModal() {
		document.body.classList.add('modal-open')
	}
	function closeModal() {
		document.body.classList.remove('modal-open')
	}

	addItemButton.addEventListener('click', function () {
		if (input.value.trim().length > 0) {
			let temp = {};
			let inputResult = input.value
			temp.todo = inputResult;
			let items = todoList.length
			todoList[items] = temp;

			updateToDoList(todoList);
			input.value = '';
		}
	});

	document.documentElement.addEventListener('keydown', (e) => {
		if (e.code === 'Enter') {
			let temp = {};
			let inputResult = input.value
			temp.todo = inputResult;
			let items = todoList.length
			todoList[items] = temp;

			updateToDoList(todoList);
			input.value = '';
		}
	})

	function updateToDoList(list) {
		out.innerHTML = '';
		if (list.length === 0) {
			out.innerHTML += '<p>No tasks</p>';
			out.classList.add("no-items")
		} else {
			list.forEach(function (item) {
				out.innerHTML += 
				'<li class="todo-item">' +
					'<h2 class="item-title">' + item.todo + '</h2>' +
					'<button class="item-delete">' + 'X' + '</button>' +
				'</li>'
			})
			out.classList.remove('no-items')
			const deleteButton = document.querySelectorAll('.item-delete');
			deleteButton.forEach(btn => btn.addEventListener('click', openModal))
		}
	}

	noButton.addEventListener('click', closeModal)
	yesButton.addEventListener('click', deleteTodoItem);

	function deleteTodoItem(index) {
		todoList.splice(index, 1)
		updateToDoList(todoList)
		closeModal()
	}

	
	if (todoList.length === 0) {
		out.innerHTML += '<p>No tasks</p>';
		out.classList.add("no-items")
	} else {
		deleteButton.addEventListener('click', )
	}
})