function createNewTodo() {
    const todos = document.querySelector('.todos');

    const div = document.createElement('div');

    const titlelabel = document.createElement('label');
    const title = document.createElement('input');
    const desclabel = document.createElement('label');
    const description = document.createElement('textarea');
    const duedatelabel = document.createElement('label');
    const duedate = document.createElement('input');
    const enter = document.createElement('button');

    title.type = 'text';
    duedate.type = 'date';
    div.classList.add('input-div');
    title.classList.add('title-input');
    description.classList.add('description-input');
    duedate.classList.add('duedate-input');
    enter.classList.add('enter');

    title.style.display = 'block';
    description.style.display = 'block';

    titlelabel.textContent = 'Title: ';
    desclabel.textContent = 'Description: ';
    duedatelabel.textContent = 'Due Date: ';
    enter.textContent = 'Add new todo';

    title.style.height = '2rem';
    title.style.width = '50rem';

    description.setAttribute('rows', 5);
    description.setAttribute('cols', 150);
    enter.style.margin = '1rem';

    div.appendChild(titlelabel);
    div.appendChild(title);
    div.appendChild(desclabel);
    div.appendChild(description);
    div.appendChild(duedatelabel);
    div.appendChild(duedate);
    div.appendChild(enter);

    todos.appendChild(div);
}

export default createNewTodo;