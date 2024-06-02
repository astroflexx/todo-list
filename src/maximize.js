import createDropDown from "./createDropDown";

function handleMaximize(e) {
    let currTodo = e.target.parentNode.parentNode;
    let todos = document.querySelector('.todos');

    let todoId = currTodo.id;
    let projectId = todos.id;
    let box = e.target.parentNode;

    let data = JSON.parse(localStorage.getItem('data'));

    let todo = data[projectId].todos[todoId];

    const description = document.createElement('p');
    const daysleft = document.createElement('p');
    const dropdown = createDropDown(); 

    description.classList.add('description');
    daysleft.classList.add('days-left');
    dropdown.classList.add('priority');

    description.textContent = todo.description;
    daysleft.textContent = `Days left: ${todo.daysLeft}`;

    currTodo.insertBefore(description, currTodo.children[1]);
    box.insertBefore(daysleft, box.children[1]);
    box.insertBefore(dropdown, box.children[2]);

    e.target.classList.toggle('maximized');
    e.target.classList.toggle('minimized');
    e.target.textContent = `Minimize`;
}

export default handleMaximize;