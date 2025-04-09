## 1
[' With input types
    let inputs = this.children;
    let inputTypes = ["text", "email", "password", "number", "date", "time", "range", "color", "file", "checkbox", "radio", "submit", "reset", "button", "textarea"];
    for(let item of inputs){
        if(inputTypes.includes(item.type)){
            console.log(item.value);
        }
    }
']