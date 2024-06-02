import markComplete from "./mark_complete";
import handleMaximize from "./maximize";
import handleMinimize from "./minimize";
import deleteTodo from "./deleteTodo";
import { format } from "date-fns";

function loadTodos(todos) {
    const todosDiv = document.querySelector('.todos');

    let toRemove = [];

    todosDiv.childNodes.forEach((child) => {
        toRemove.push(child);
    });

    toRemove.forEach((child) => {
        todosDiv.removeChild(child);
    });

    let id = 0;

    todos.forEach((todo) => {
        const mainDiv = document.querySelector('.todos');

        const todoDiv = document.createElement('div');
        const title = document.createElement('p');
        const buttons = document.createElement('div');
        const duedate = document.createElement('p');

        const markcomplete = document.createElement('button');
        const deletetodo = document.createElement('button');
        const minmax = document.createElement('button');

        todoDiv.id = id;
        todoDiv.classList.add('todo');
        title.classList.add('title');
        buttons.classList.add('buttons');
        duedate.classList.add('due-date');
        markcomplete.classList.add('mark-complete');
        deletetodo.classList.add('delete-btn');
        minmax.classList.add('minmax');
        minmax.classList.add('minimized');

        title.textContent = todo.title;
        duedate.textContent = `Due date: ${format(todo.dueDate, 'PPPP')}`;
        markcomplete.textContent = todo.complete ? `Complete!` : `Mark complete`;
        deletetodo.textContent = `Delete todo`;
        minmax.textContent = `Maximize`;

        buttons.appendChild(duedate);
        buttons.appendChild(markcomplete);
        buttons.appendChild(deletetodo);
        buttons.appendChild(minmax);

        todoDiv.appendChild(title);
        todoDiv.appendChild(buttons);

        mainDiv.appendChild(todoDiv);   

        markcomplete.addEventListener('click', (e) => {
            markComplete(e.target, mainDiv.id, e.target.parentNode.parentNode.id);
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

        id++;
    });
}

export default loadTodos;