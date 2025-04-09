class CustomArray extends Array {
    constructor(...args){
        super(...args);
    }
}
let arr = new CustomArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


arr.__proto__.getArgs = function(){
    for(let i = 0; i < this.length; i++){
        console.log(this[i]);
    }
}
// arr.getArgs();


arr.__proto__.findSumOfAllElement = function(){
    let sum = 0;
    for(let i = 0; i < this.length; i++){
        sum+=this[i]
    }
    console.log(sum);
}
// arr.findSumOfAllElement();


arr.__proto__.findSumOfLastAndFirstElement = function(){
    console.log(this[0] + this[this.length-1]);
}
// arr.findSumOfLastAndFirstElement();
