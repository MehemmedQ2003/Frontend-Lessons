let form = document.getElementById("form");

let allUsers = [];
form.addEventListener("submit", function(e){
    e.preventDefault();

    let data = new FormData(form);
    let obj = {};
    for(let entries of data.entries()){
        // console.log(entries[0] + ":" + entries[1]);
        obj[entries[0]] = entries[1];
    }
    
    allUsers.push(obj);
    console.log(allUsers);

});