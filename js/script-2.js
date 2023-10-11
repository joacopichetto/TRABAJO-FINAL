var toggle = document.getElementById("container");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");

toggle.onclick = function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    h1.classList.toggle("active");
}


