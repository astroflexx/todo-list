import loadTodos from "./loadTodos";

function viewTodos(e) {
    const project = e.target;
    const todosDiv = document.querySelector('.todos');
    todosDiv.id = project.id;

    const data = JSON.parse(localStorage.getItem('data'));

    const todobtndiv = document.querySelector('.todobtndiv');
    todosDiv.removeChild(todobtndiv);

    loadTodos(data[project.id].todos);

    todosDiv.appendChild(todobtndiv);
}

export default viewTodos;