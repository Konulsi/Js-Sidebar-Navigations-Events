"use strict"



let navbar = document.querySelector(".navbar");

let closeIcon = document.querySelector(".navbar .close-icon");

let openIcon = document.querySelector(".navbar .open-icon");


openIcon.addEventListener("click", function(){   
    navbar.classList.remove("hide-navbar");
    closeIcon.classList.remove("d-none");
    this.classList.add("d-none");
})

closeIcon.addEventListener("click", function(){
    navbar.classList.add("hide-navbar");
    openIcon.classList.remove("d-none");
    this.classList.add("d-none");
})




