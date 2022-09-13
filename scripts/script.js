let todos = []

const renderTodos = (todos) => {
    const todoList = document.querySelector("#todos")
    todoList.innerHTML =  " "

    todos.forEach((todo) => {
            todoList.appendChild(generateTodoDOM(todo))
    })
    
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')

    todoText.textContent = todo
    containerEl.appendChild(todoText)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    return todoEl
}

const createTodo = (text) => {
    todos.push(text)
}



document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()

    if (text.length > 0) {
        createTodo(text)
        renderTodos(todos)
    }

    console.log(todos)
})