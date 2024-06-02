function markComplete(button, projectId, todoId) {
    let data = JSON.parse(localStorage.getItem('data'));

    if (data[projectId].todos[todoId].complete) {
        button.textContent = 'Mark Complete';
        data[projectId].todos[todoId].complete = false;
    } else {
        data[projectId].todos[todoId].complete = true;
        button.textContent = 'Complete!';
    }

    localStorage.setItem('data', JSON.stringify(data));
}

export default markComplete;