const colorPicker = document.getElementById("bg");
colorPicker.addEventListener("input", myFunction);

function myFunction() {
   
    document.body.style.backgroundColor = colorPicker.value;
}

