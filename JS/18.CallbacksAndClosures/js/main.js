const button = document.querySelector("button");

function sampleFunc(){
    console.log(this);
}
sampleFunc();

button.addEventListener("click", sampleFunc);
document.body.addEventListener("scroll", sampleFunc);