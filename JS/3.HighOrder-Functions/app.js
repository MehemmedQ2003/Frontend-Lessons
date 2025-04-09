let nums = [1,2,3,4,5,6,7,8,9,10];

// todo Show odd numbers
// todo Show even numbers
// todo Show greater than n
// todo Show less than n


// ! Ayrı-ayrı funksiyalar istifadə edərək və onları ayrı ayrılıqda cavablarını almaq.

// function getOddNumbers(num){
//     let numArrs = [];
//     for(let numArr of num){
//         if(numArr % 2 == 1){
//             numArrs.push(numArr);
//         }
//     }
//     return numArrs;
// }
// console.log(getOddNumbers(nums));


// function getEvenNumbers(numsArr){
//     let emptyArr = [];
//     for(let nums of numsArr){
//         if(nums % 2 == 0){
//             emptyArr.push(nums);
//         }
//     }
//     return emptyArr;
// }



// function getNumberIsGreaterThanOtherNumber(num, otherNum){
//     let emptyArr = [];
//     for(let numArr of num){
//         if(numArr > otherNum){
//             emptyArr.push(numArr);
//         }
//     }
//     return emptyArr;
// }
// console.log(getNumberIsGreaterThanOtherNumber(nums, 4))



// ! Ayrı-ayrı funksiyalar istifadə edərək və onları bir funksiyada toplayaraq cavab almaq.



function isOdd(num){
    return num % 2 == 1;
}

function isEven(num){
    return num % 2 == 0;
}

function isLessThan(num){
    return num < 5;
}

function isGreaterThan(num){
    return num > 5;
}

function allMathematicalOperationsTogether(numArr, checkFunction){
    let numberArr = [];
    for(let num of numArr){
        if(checkFunction(num)){
            numberArr.push(num);
        }
    }
    console.log(numberArr);
}
allMathematicalOperationsTogether(nums, isGreaterThan);
allMathematicalOperationsTogether(nums, isLessThan);
