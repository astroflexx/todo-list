function deleteTodo(e) {
    const todos = document.querySelector('.todos');
    const projectId = todos.id;
    const todo = e.target.parentNode.parentNode;
    const todoId = todo.id;

    let data = JSON.parse(localStorage.getItem('data'));

    data[projectId].todos.splice(todoId, 1);

    todos.removeChild(todo);

    let id = 0;

    todos.childNodes.forEach((child) => {
        if (child.nodeType == Node.ELEMENT_NODE) {
            if (child.classList.contains('todo')) {
                child.id = id;
                id++;
            }
        }
    });

    localStorage.setItem('data', JSON.stringify(data));
}

export default deleteTodo;