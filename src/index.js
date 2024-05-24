import './style.css';
import createProject from './project';

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

data.forEach((project) => {
    const div = document.createElement('div');
    div.classList.add('project');
    div.textContent = project.projectName;
    list.appendChild(div);
});

// create new project button

const btn = document.querySelector('.create-new-project');

btn.addEventListener('click', () => {
    createProject();
});