// ! Function isOddOrEven


// Odd Numbers
function isOdd(x){
    if(typeof x !== "number"){
        console.log("Enter a number");
    }
    else{
        if(x % 2 === 0){
            return false;
        }
        else{
            return true;
        }
    }
}

// Even Numbers
function isEven(x){
    if(typeof x !== "number"){
        console.log("Enter a number");
    }
    else{
        if(x % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }
}


// ! Single responsibility principle
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isArray(nums){
    if(Array.isArray(nums)){
        return true;
    }
    else{
        return false;
    }

}


function getOddNums(nums, errorMessage){
    let result = [];
    if(isArray(nums)){
        for(let i = 0; i < nums.length; i++){
            if(isOddOrEven(nums[i])){
                result.push(nums[i]);
            }
        }
    }
    else{
        console.log(errorMessage);
    }
    console.log(result);
}
// getOddNums(numbers, "Zəhmət olmasa array daxil edin");



function getEvenNums(nums, errorMessage){
    let result = [];
    if(isArray(nums)){
        for(let i = 0; i < nums.length; i++){
            if(!isOddOrEven(nums[i])){
                result.push(nums[i]);
            }
        }
    }
    else{
        console.log(errorMessage);
    }
    console.log(result);
}
// getEvenNums(numbers, "Zəhmət olmasa array daxil edin");


// ! Function numbersByDivision
function numbersByDivision(nums, division, errorMessage){
    let result = [];
    if(isArray(nums)){
        for(let i = 0; i < nums.length; i++){
            if(nums[i] % division === 0){
                result.push(nums[i]);
            }
        }
    }
    else{
        console.log(errorMessage);
    }
    console.log(result);
}
// numbersByDivision(numbers, 2, "Zəhmət olmasa array daxil edin");


