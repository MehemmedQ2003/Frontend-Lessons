let nums = [1,2,3,4,5,6,7,8,9,10];

function filterFunction(numsArrays, numsFunction) {
    let tempArr = [];
    for(let numArr in numsArrays){
        if(numsFunction(numArr)){
            tempArr.push(numArr);
        }
    }
    return tempArr
}
const numsFilterForFunc = filterFunction(nums, num => num > 5);
console.log(numsFilterForFunc);




Array.prototype.filterNumber = function(checkFunc){
    let tempArr = [];
    for(let num of this){
        if(checkFunc(num)){
            tempArr.push(num)
        }
    }
    return tempArr;
}

const numsFilter = nums.filterNumber(num => num > 5);
console.log(numsFilter);




Array.prototype.customMap = function (generateFunction){
    let tempArr = [];
    for(let num of this){
        tempArr.push(generateFunction(num));
    }
    return tempArr;
}
const generate = nums.customMap(num => num * 2);
console.table(generate);