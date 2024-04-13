 var requiredClick = 1;
var currentClick = 0;

function changeImage() {
    var image = document.getElementById('myImage');
    currentClick += 1;
    console.log(currentClick);
    
    if (requiredClick === currentClick) {
      
        requiredClick += 1;
        currentClick = 0;
        console.log(image.src);
        
        var srcValue = image.getAttribute("src");
        if (srcValue === "bulboff.png") {
            image.setAttribute("src", "bulbon.png");
        } else {
            image.setAttribute("src", "bulboff.png");
        }
     }
}

