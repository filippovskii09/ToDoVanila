window.addEventListener('DOMContentLoaded', () => {
	const deleteModalWindow = document.querySelector('.delete-modal'),
 			out = document.querySelector('.todo__results'),
 			input = document.querySelector('#input'),
 			addItemButton = document.querySelector('.todo__add'),
 			yesButton = document.querySelector('#yes'),
 			noButton = document.querySelector('#no'),
			resetButton = document.querySelector('.reset');

	const todoList = getTodoList();

	function saveTodoList(list) {
		localStorage.setItem('todoList', JSON.stringify(list))
	}

	function getTodoList() {
		const savedList = localStorage.getItem('todoList');
		if (savedList !== null && savedList !== undefined) {
			return JSON.parse(savedList);
		} else {
			return [];
		}
	}

	function openModal() {
		document.body.classList.add('modal-open')
	}
	function closeModal() {
		document.body.classList.remove('modal-open')
	}

	function deleteAllItems() {
		todoList.length = 0;
		localStorage.clear();
		updateToDoList(todoList);
		closeModal();
	}
	
	function updateToDoList(list) {
		out.innerHTML = '';
		if (list.length === 0) {
			out.innerHTML += '<p>No tasks</p>';
			out.classList.add("no-items")
		} else {
			list.forEach((item) => {
				out.innerHTML += 
				'<li class="todo-item">' +
					'<h2 class="item-title">' + item.todo + '</h2>' +
					'<button class="item-delete">' + '<i class="material-icons">delete</i>' + '</button>' +
				'</li>'
			})
			out.classList.remove('no-items')
			const deleteButton = document.querySelectorAll('.item-delete');
			deleteButton.forEach(btn => btn.addEventListener('click', deleteTodoItem))
		}
		saveTodoList(list);
	}

	function deleteTodoItem(index) {
		todoList.splice(index, 1)
		updateToDoList(todoList)
		saveTodoList(todoList)
		closeModal()
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

	noButton.addEventListener('click', closeModal)
	yesButton.addEventListener('click', deleteAllItems);
	
	resetButton.addEventListener('click', () => {
		if (todoList.length > 0) {
			openModal()
		}
	})

	if (todoList.length === 0) {
		out.innerHTML += '<p>No tasks</p>';
		out.classList.add("no-items")
	} else {
		console.log('Working...');
	}

	updateToDoList(todoList)
})