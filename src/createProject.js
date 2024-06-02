import viewTodos from "./viewTodos";

function createProject() {
    const projects = document.querySelector('.projects');
    const list = document.querySelector('.list');
    const btn = document.querySelector('.btn');

    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.textContent = 'Name of the project:';
    label.style.padding = '1rem';

    input.type = 'text';
    input.style.padding = '0.5rem';
    input.focus();

    div.appendChild(label);
    div.appendChild(input);

    projects.appendChild(div);
    projects.removeChild(btn);

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const data = JSON.parse(localStorage.getItem('data'));

            const projectName = e.target.value;
            const project = {
                projectName,
                todos: [],
            };

            const newProject = document.createElement('div');
            newProject.classList.add('project');
            newProject.textContent = projectName;
            newProject.id = data.length;

            data.push(project);
            localStorage.setItem('data', JSON.stringify(data));

            newProject.addEventListener('click', (e) => {
                viewTodos(e);
            });

            projects.removeChild(div);
            projects.appendChild(btn);
            list.appendChild(newProject);
        }
    });
}

export default createProject;