function handleMinimize(e) {
    let todo = e.target.parentNode.parentNode;
    let buttons = e.target.parentNode;

    let toRemove = [];

    todo.childNodes.forEach((child) => {
        if (!(child.classList.contains('title') || child.classList.contains('buttons'))) {
            toRemove.push(child);
        }
    });

    toRemove.forEach((child) => {
        todo.removeChild(child);
    });

    toRemove = [];

    buttons.childNodes.forEach((child) => {
        if (!(child.classList.contains('due-date')
            || child.classList.contains('mark-complete')
            || child.classList.contains('minmax')
            || child.classList.contains('delete-btn'))) {
                toRemove.push(child);
        }
    });

    toRemove.forEach((child) => {
        buttons.removeChild(child);
    });

    e.target.textContent = 'Maximize';
    e.target.classList.remove('maximized');
    e.target.classList.add('minimized');
}

export default handleMinimize;