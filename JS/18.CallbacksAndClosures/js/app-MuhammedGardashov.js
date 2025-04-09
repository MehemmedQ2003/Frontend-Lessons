// ! Javascript callback and closures


// ? Express function

// let expressFunction = function() {
//     console.log('Express function')
// }


// ? Arrow function

// let arrowFunction = () => {
//     console.log('Arrow function')
// }



// ? Basic callback example

// function basicCallback(a, b, addition) {
//     let result = a + b;
//     addition(result)
// }


// basicCallback(2, 2, function(number) {
//     if(number % 2 == 0){
//         console.log(number + ' is even')
//     }
//     else{
//         console.log(number + ' is odd')
//     }
// })


// ? Counter example

// let count = 5;

// function createTimer(time, callback){
//     setTimeout(() => {
//         callback("Countdown started");
//     }, time)
// }
// createTimer(3000, function(msg) {
//     console.log(msg)
//     let interval = setInterval(() => {
//         console.log(count);
//         count--;
//         if(count == 0){
//             clearInterval(interval)
//         }
//     }, 1000);
// })



// ? Check String

// function checkString(str, callback){
//     if(str.length > 5){
//         callback(true);
//     }
//     else{
//         callback(false);
//     }
// }

// checkString("Hello", res => {
//     if(res){
//         console.log("String is longer than 5 characters");
//     }
//     else{
//         console.log("String is shorter than 5 characters");
//     }
// })


// checkString("Muhammed", res => res ? console.log("String is greater than 5 characters") : console.log("String is less than 5 characters"));



// ? Get user data

function getUserData() {
    let name = "Muhammed"
    function getName() {
        return name;
    }

    return {
        name: getName()
    }
}
let user = getUserData();
console.log(user)


function getProductData() {
    let name = "Iphone 14"
    function getName() {
        return name;
    }

    function getPrice() {
        return 5000
    }

    return {
        name: getName(),
        price: getPrice()
    }
}
let product = getProductData();
console.log(product);



function getName(){
    return "Muhammed";
}
console.log(getName());