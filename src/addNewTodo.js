import { format } from "date-fns";
import markComplete from "./mark_complete";
import createDropDown from "./createDropDown";
import handleMaximize from "./maximize";
import handleMinimize from "./minimize";
import deleteTodo from "./deleteTodo";

function addNewTodo(todo, todoId) {
    const todos = document.querySelector('.todos');
    const inputdiv = document.querySelector('.input-div');

    const div = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const buttons = document.createElement('div');
    const duedate = document.createElement('p');
    const daysleft = document.createElement('p');
    const markcomplete = document.createElement('button');
    const dropdown = createDropDown();
    const deletetodo = document.createElement('button');
    const minmax = document.createElement('button');

    div.classList.add('todo');
    title.classList.add('title');
    description.classList.add('description');
    buttons.classList.add('buttons');
    duedate.classList.add('due-date');
    daysleft.classList.add('days-left');
    deletetodo.classList.add('delete-btn');
    markcomplete.classList.add('mark-complete');
    dropdown.classList.add('priority');
    minmax.classList.add('minmax');
    minmax.classList.add('maximized');

    div.id = todoId;
    title.textContent = todo.title;
    description.textContent = todo.description;
    duedate.textContent = `Due date: ${format(todo.dueDate, 'PPPP')}`;
    daysleft.textContent = `Days left: ${todo.daysLeft}`;
    markcomplete.textContent = todo.complete ? `Complete!` : `Mark complete`;
    deletetodo.textContent = `Delete todo`;
    minmax.textContent = `Minimize`;

    buttons.appendChild(duedate);
    buttons.appendChild(daysleft);
    buttons.appendChild(dropdown);
    buttons.appendChild(markcomplete);
    buttons.appendChild(deletetodo);
    buttons.appendChild(minmax);

    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(buttons);

    markcomplete.addEventListener('click', (e) => {
        markComplete(e.target, todos.id, e.target.parentNode.parentNode.id);
    });

    minmax.addEventListener('click', (e) => {
        if (minmax.classList.contains('maximized')) {
            handleMinimize(e);
        } else {
            handleMaximize(e);
        }
    });

    deletetodo.addEventListener('click', (e) => {
        deleteTodo(e);
    })

    todos.removeChild(inputdiv);
    todos.appendChild(div);
}

export default addNewTodo;