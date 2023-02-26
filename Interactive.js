let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('team');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-number').value;
    row.insertCell(1).innerHTML = document.getElementById('new-first').value;
    row.insertCell(2).innerHTML = document.getElementById('new-last').value;
    row.insertCell(3).innerHTML = document.getElementById('new-pos').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-player').value = '';
});

