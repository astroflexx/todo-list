function createDropDown() {
    const priorities = ['Low', 'Medium', 'High'];

    const div = document.createElement('div');
    const select = document.createElement('select');
    select.setAttribute('name', 'priority');
    select.setAttribute('id', 'priority');

    for (let priority of priorities) {
        const option = document.createElement('option');
        option.setAttribute('value', priority);
        option.textContent = priority;
        select.appendChild(option);
    }

    div.appendChild(select);
    return div;
}

export default createDropDown;