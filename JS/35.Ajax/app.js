// AJAX - Asynchronous Javascript and XML

// XMLHttpRequest
const url = "data.json";
const request = new XMLHttpRequest();
request.open("GET", url);
request.send();
request.onload = () => {
    if(request.status === 200) {
        data_arr = JSON.parse(request.response);
        let dataContainer = document.querySelector(".data-container");
        data_arr.forEach(data => {
            dataContainer.innerHTML += `
            <div class="panel panel-success">
                <h2>${data.name}</h2>
                <h4>${data.age}</h4>
                <h5>${data.city}</h5>
                <hr>
            </div>`
        });
        console.log(JSON.parse(request.response));
    }
    else{
        console.log(`Error: ${request.status} ${request.statusText}`);
    }
};


