// Arrow functions

function sum(a, b){
    console.log(a + b);
}
// sum(10, 20);


class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    showInfo(){
        console.log("Name: " + this.name + " Age: " + this.age);
    }

    getDate = () => {
        console.log(new Date());
    }
}

let person1 = new Person("Muhammed", 20);
// person1.showInfo();



function isEven(a){
    return a % 2 == 0;
}

function isOdd(a){
    return a % 2 != 0;
}


function customFilter(arr, callback){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(customFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], odd => odd % 2 !== 0));
console.log(customFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], even => even % 2 === 0));