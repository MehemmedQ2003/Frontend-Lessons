let file = document.querySelector('input[type="file"]');
let imagePreview = document.querySelector('.image-preview');
file.addEventListener('change', function (event) {
    let selectedFile = event.target.files[0];
    if(selectedFile && selectedFile.type.startsWith('Screenshots/')){
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageDataUrl = event.target.result;
            imageDataUrl.innerHtml = `<img src="${imageDataUrl}" alt="Image Preview">`;
        }
        reader.readAsDataURL(selectedFile);
    }
    else{
        imagePreview.innerHTML = '';
    }
})


function checkData(element){
    if(element.value.length > 8){
        alert("Data is valid")
    }
    else{
        alert("Please fill the form");
    }
}