// ! 1) Add new Task

function addNewTask(element){
    const enterElement = element.previousElementSibling;
    const elementValue = enterElement.value;
    const tasks = document.querySelector(".tasksBlock");
    let textTemplate = `
        <div class="input-group mb-3">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" onclick="doneTask(this)">
            </div>
            <input type="text" class="form-control" value="${elementValue}">
            <button class="btn btn-outline-danger deleteBtn" type="button" onclick="deleteTask(this)">Delete</button>
        </div>
    `
    tasks.innerHTML += textTemplate;
    enterElement.value = ""
}



// todo 2) Delete Task

function deleteTask(element){
    const parentElement = element.parentElement;
    parentElement.remove();
}



// ? 3) Done Task

function doneTask(element){
    if(element.checked){
        element.parentElement.nextElementSibling.disabled = true;
        element.parentElement.nextElementSibling.style.textDecoration = "line-through";
        element.parentElement.nextElementSibling.nextElementSibling.disabled = true;
    }
    else{
        element.parentElement.nextElementSibling.disabled = false;
        element.parentElement.nextElementSibling.style.textDecoration = "none";
        element.parentElement.nextElementSibling.nextElementSibling.disabled = false;
    }
}
