let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ! Single responsibility principle

function isArray(nums){
    if(Array.isArray(nums)){
        return true;
    }
    else{
        return false;
    }

}



// ! Find odd or even number with function
function filterNumsArray(nums, checkFunction, errorMessage){
    let result = [];
    if(isArray(nums)){
        for(let i = 0; i < numbers.length; i++){
            if(checkFunction(nums[i])){
                result.push(nums[i]);
            }
        }
        return result;
    }
    else{
        return errorMessage;
    }
}


// ! 1
// Get Odd Number
// let getOddNumber = filterNumsArray(numbers, function(num){
//     if(num % 2 === 0){
//         return false;
//     }
//     else{
//         return true;
//     }
// }, "Zəhmət olmasa array daxil edin");

let getOddNumber = filterNumsArray(numbers, num => num % 2 !== 0, "Zəhmət olmasa array daxil edin");
console.log(getOddNumber);



// ! 2
// let getEvenNumber = filterNumsArray(numbers, function(num){
//     if(num % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }, "Zəhmət olmasa array daxil edin");
// console.log(getEvenNumber);

let getEvenNumber = filterNumsArray(numbers, num => num % 2 === 0, "Zəhmət olmasa array daxil edin");
console.log(getEvenNumber);



// ! 3
// let getNumbersDIvidedBy3 = filterNumsArray(numbers, function(num){
//     if(num % 3 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }, "Zəhmət olmasa array daxil edin");
// console.log(getNumbersDIvidedBy3);

let getNumbersDIvidedBy3 = filterNumsArray(numbers, num => num % 3 === 0, "Zəhmət olmasa array daxil edin");
console.log(getNumbersDIvidedBy3);


// ! 4
// let getNumbersLessThan6 = filterNumsArray(numbers, function(num){
//     if(num < 6){
//         return true;
//     }
//     else{
//         return false
//     }
// }, "Zəhmət olmasa array daxil edin");
// console.log(getNumbersLessThan6);

let getNumbersLessThan6 = filterNumsArray(numbers, num => num < 6, "Zəhmət olmasa array daxil edin");
console.log(getNumbersLessThan6);


