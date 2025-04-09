// CRUD - Create, Read, Update, Delete

// Name, Surname, Email


let users = [];

class User {
    constructor(_id, _name, _surname, _email) {
        this.id = _id;
        this.name = _name;
        this.surname = _surname;
        this.email = _email;
    }
}

// Create User
function createUser(e) {
    e.preventDefault();

    let id = users.length + 1;
    let name = document.getElementsByName("_name")[0].value;
    let surname = document.getElementsByName("_surname")[0].value;
    let email = document.getElementsByName("_email")[0].value;

    let user = new User(id, name, surname, email);
    users.push(user);

    renderTable();
    
}


// Render Table
function renderTable() {    
    let tBody = document.getElementsByTagName("tbody")[0];
    let html = '';
    for (let user of users) {
        let template = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.email}</td>
                <td class="w-25">
                    <a href="#" class="btn btn-primary" onclick="updateUser(this)">Edit</a>
                    <a href="#" class="btn btn-danger" onclick="deleteUser(this)">Delete</a>
                    <a href="#" class="btn btn-warning" onclick="readUser(event)">Show</a>
                </td>
            </tr>
        `;
        html += template;
    }
    tBody.innerHTML = html;
}

// Update User
function updateUser(element) {
    let row = element.parentElement.parentElement;
    let id = parseInt(row.children[0].innerText);

    let user = users.find(u => u.id === id);

    const enterInformation1 = prompt("Enter Name", user.name);
    const enterInformation2 = prompt("Enter Surname", user.surname);
    const enterInformation3 = prompt("Enter Email", user.email);

    user.name = enterInformation1;
    user.surname = enterInformation2;
    user.email = enterInformation3;

    renderTable();
}

// Delete User
function deleteUser(element) {
    let row = element.parentElement.parentElement;
    let id = parseInt(row.children[0].innerText);

    users = users.filter(u => u.id !== id);

    renderTable();
}

// Read User
function readUser(e) {
    e.preventDefault();
    let row = e.target.parentElement.parentElement;
    let id = parseInt(row.children[0].innerText);

    let user = users.find(u => u.id === id);
    alert(`Name: ${user.name}\nSurname: ${user.surname}\nEmail: ${user.email}`);
}