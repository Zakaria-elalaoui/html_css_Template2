let button = document.querySelector(".toogle-menu");
let list = document.querySelector("ul");

button.addEventListener('click',function (){
    list.classList.toggle("toogle");
})
