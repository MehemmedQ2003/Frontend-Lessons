// Localstorage

let form = document.querySelector("form");
let infoUsers = JSON.parse(localStorage.getItem("users")) || [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let surname = e.target.surname.value;
    let email = e.target.email.value;

    let userObj = {
        name: name,
        surname: surname,
        email: email
    };

    infoUsers.push(userObj);
    localStorage.setItem("users", JSON.stringify(infoUsers));
    // console.table({ name, surname, email });
})