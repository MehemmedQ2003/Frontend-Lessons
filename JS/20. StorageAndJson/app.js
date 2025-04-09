// let form = document.querySelector('form');
// let isLogin = false;


// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     let username = e.target.elements.username.value;
//     let password = e.target.elements.password.value;
//     if(username === 'admin' && password === 'admin'){
//         isLogin = true;
//         // Store this value to session storage
//         localStorage.setItem('isLogin', isLogin);
//     }
//     else{
//         isLogin = false;
//         localStorage.setItem('isLogin', isLogin);
//     }
// })



// ! ------------------------------------------------- ! //



//  Localstorage-də 3 mərhələ oldu

// 1) Stode data-ın Localstorage-də yazılması.

// 2) Store data-ın Localstorage-dən götürülüb istifadə olunması.

// 3) Stode data-ın Localstorage-dən silinməsi.



// ! ------------------------------------------------- ! //



let form = document.querySelector('form');
// let isLogin = false;
let users = JSON.parse(localStorage.getItem('users')) || [];


form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = e.target.name.value;
    let surname = e.target.surname.value;
    let email = e.target.email.value;

    let obj = {
        name: name,
        surname: surname,
        email: email
    }
    users.push(obj);
    localStorage.setItem('users', JSON.stringify(users));
})