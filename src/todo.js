import createNewTodo from "./createNewTodo";
import { differenceInCalendarDays } from 'date-fns';
import addNewTodo from "./addNewTodo";

const todosDiv = document.querySelector('.todos');
const todobtndiv = document.querySelector('.todobtndiv');
const createTodo = document.querySelector('.create-new-todo');

createTodo.addEventListener('click', () => {

    todosDiv.removeChild(todobtndiv);
    createNewTodo();

    document.querySelector('.enter').addEventListener('click', () => {
        let title = document.querySelector('.title-input').value;
        let description = document.querySelector('.description-input').value;
        let duedate = document.querySelector('.duedate-input');

        let currDate = new Date();
        let dueDate = new Date(duedate.value);
        let daysLeft = differenceInCalendarDays(dueDate, currDate);
        let complete = false;

        let todo = {
            title,
            description,
            dueDate,
            daysLeft,
            complete,
        };

        let data = JSON.parse(localStorage.getItem('data'));

        data[todosDiv.id].todos.push(todo);

        addNewTodo(todo, data[todosDiv.id].todos.length - 1);

        localStorage.setItem('data', JSON.stringify(data));

        todosDiv.appendChild(todobtndiv);
    });
});