// let obj = {
//     c: 3,
//     showSomething(){
//         console.log(this.c)
//     }
// };


// function Car(_a, _b){
//     this.a = _a;
//     this.b = _b;
// }

// Object.assign(Car.prototype, obj);
// let car = new Car(1, 2);
// console.log(car.c)
// car.showSomething();



// ! Class


// class Car{
//     constructor(name){
//         this.name = name;
//         this.type = "Car";
//     }
//     drive(){
//         console.log("Vroom");
//     }
// };

// class Boat{
//     constructor(name){
//         this.name = name;
//         this.type = "Boat";
//     }
//     pilot(){
//         console.log("Swoosh");
//     }
// };


// const NameMixin = {
//     getName(){
//         console.log(`Name is: ${this.name}`);
//     }
// };

// const car = new Car("BMW");
// const boat = new Boat("Titanic");


// const car2 = new Car("Mercedes");
// const boat2 = new Boat("Boat");

// Object.assign(Car.prototype, NameMixin);
// Object.assign(Boat.prototype, NameMixin);

// car.getName();
// boat.getName();


// car2.getName();
// boat2.getName();



// ! Obj

// const obj = {
//     a: 2,
//     b: 3
// };

// const obj2 = {
//     c: 4,
//     d: 5
// };

// obj2.__proto__ = obj;
// console.log(obj2.a);                // 2


// class Demo{
//     constructor(){
//         this.name = "Demo";
//     }
// }
// const obj3 = new Demo();
// obj3.__proto__= obj;
// console.log(obj3.a);                // 2

// Demo.prototype = obj;

// Object.assign(Demo.prototype, obj, obj2);
// console.log(obj3)