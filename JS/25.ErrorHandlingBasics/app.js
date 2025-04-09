// Error handling


// ! First Module

// try{
//     let a  = 6;
//     let b  = 10;
//     console.log(a + b + c);
// }
// catch(err){
//     console.log("There is an error in first module");
// }

// ! Second Module

// console.log("The second module works without problems");


// ? Error types

// 1. ReferenceError
// 2. TypeError
// 3. ValueError
// 4. SyntaxError



// try{
//     let a  = 6;
//     let b  = 10;
//     res = eval("console.log(a/)");
//     // Eval metodunun içinə sintaktik səhv ola biləcəyini düşündüyümüz kodu yazırıq.
// }
// catch(err){
//     if(err.name == "ReferenceError"){
//         console.log(err.name , "An unassigned variable exists");
//     }
//     else if(err.name == "TypeError"){
//         console.log(err.name , "An incorrect data type is used");
//     }
//     else if(err.name == "ValueError"){
//         console.log(err.name , "An incorrect value is used");
//     }
//     else if(err.name == "SyntaxError"){
//         console.log(err.name , "An incorrect syntax is used");
//     }
//     else{
//         console.log(err.name , "There is an error");
//     }
// }
// finally{
//     console.log("The program is finished");
// }



// With Error class

// class CustomError extends Error{
//     constructor(){
//         super();
//         this.name = "Spesific Error";
//     }
// }

// let a = 6;
// if(a > 7){
//     console.log("True");
// }
// else{
//     throw new TypeError();
// }