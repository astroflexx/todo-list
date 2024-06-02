import './style.css';
import createProject from './createProject';
import viewTodos from './viewTodos';
import loadTodos from './loadTodos';

let data = JSON.parse(localStorage.getItem('data'));

if (!data || data.length === 0) {
    const defaultProject = {
        projectName: 'default project',
        todos: [],
    };
    
    localStorage.setItem('data', JSON.stringify([defaultProject]));
}

data = JSON.parse(localStorage.getItem('data'));

// initialize projects

const list = document.querySelector('.list');
let id = 0;

data.forEach((project) => {
    const div = document.createElement('div');
    div.classList.add('project');
    div.textContent = project.projectName;
    div.id = id;

    div.addEventListener('click', (e) => {
        viewTodos(e);
    });

    list.appendChild(div);
    id++;
});

// create new project button

const btn = document.querySelector('.create-new-project');

btn.addEventListener('click', () => {
    createProject();
});

// load todos of default project on page load

const todosDiv = document.querySelector('.todos');
const todobtndiv = document.querySelector('.todobtndiv');

todosDiv.removeChild(todobtndiv);

loadTodos(data[0].todos);

todosDiv.appendChild(todobtndiv);