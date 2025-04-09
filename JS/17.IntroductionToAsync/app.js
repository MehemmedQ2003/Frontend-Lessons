// todo Introduction to Async JavaScript



// ! Set timeout
// setTimeout(function(){
//     console.log("Hello World");
// }, 3000)


// ! Set interval
// let i = 1;
// setInterval(function(){
//     i++;
//     console.log(i);
// }, 1000);


// ! Clear interval
// let i = 1;
// let interval = setInterval(function(){
//     i++;
//     console.log(i);
//     if(i == 10){
//         clearInterval(interval);
//     }
// }, 1000)


// ! Other examples
// let a = 1;
// let increaseFunc = () => {
//     a++;
//     console.log(a);
//     if(a == 10){
//         clearInterval(interval);
//     }
// }
// let interval = setInterval(increaseFunc, 1000)


// Api

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        // console.log(JSON.parse(this.responseText));

        let users = JSON.parse(this.responseText);
        for(let user of users){
            // console.log(user.name + " " + user.surname);

            // setInterval(() => {
            //     document.getElementById("demo").innerHTML += user.name + " " + user.surname + "<br>";
            // }, 10000);
            document.getElementById("demo").innerHTML += user.name + " " + user.surname + "<br>";
        }
    }
}
xhttp.open("GET", "users.json", true);
xhttp.send();