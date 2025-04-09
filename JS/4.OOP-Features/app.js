// const prompt = require("prompt-sync")();

// const name = prompt("Enter your name: ");
// const surname = prompt("Enter your surname: ");
// const age = prompt("Enter your age: ");
// console.table(`Name: ${name} surname: ${surname} age: ${age}`);


// const person = {
//     name: "Muhammed",
//     surname: "Gardashov",
//     age: 20,
//     getFullInformation: function(){
//         return `${this.name} ${this.surname} ${this.age}`
//     }
// }
// console.table(person);
// console.log(person.getFullInformation());




// function userInfo(_name, _surname, _age) {
//     return {
//         name: _name,
//         surname: _surname,
//         age: _age
//     }
// }
// const user = userInfo("Muhammed", "Gardashov", 20);
// console.table(user);
// console.log(typeof user);



function ObjectConstructor(_name, _surname, _age){
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
}

const constructor = new ObjectConstructor("Muhammed", "Gardashov", 20);
console.table(constructor);