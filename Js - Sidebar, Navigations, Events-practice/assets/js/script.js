"use strict"

//inputa eyni yazilan reqem sayinda li yaransin, icherisinde p135 yazilsin

// let input = document.querySelector("#products input")
// let btn = document.querySelector("#products button")
// let ul = document.querySelector("#products ul")


// btn.addEventListener("click", function () {

  

//     if(input.value == ""){
//         alert("Dont-empty")
//         return;
//     }

//     if(isNaN(input.value)){
//         alert();
//         input.value = "";
//         return;
//     }
    

//      ul.innerHTML = "";

//     for (let i = 1; i <= input.value; i++) {
//         let li = document.createElement("li")
//         li.className = "list-group-item mt-2";
//         li.innerText = "P135";
//         ul.append(li);
//     }

//     input.value = "";

// })







//sidebar

// let sidebar = document.querySelector(".sidebar");

// let closeIcon = document.querySelector(".sidebar .close-icon");

// let openIcon = document.querySelector(".sidebar .open-icon");


// openIcon.addEventListener("click", function(){    //sidebari achmaq uchun. hmaburger menu getsin, X gelsin 
//     sidebar.classList.remove("hide-sidebar");
//     closeIcon.classList.remove("d-none");
//     this.classList.add("d-none");
// })

// closeIcon.addEventListener("click", function(){    // sidebari baglamaq uchun x getsin. hamburger menu gorsensin
//     sidebar.classList.add("hide-sidebar");
//     openIcon.classList.remove("d-none");
//     this.classList.add("d-none");
// })
 





// NAVIGATIONS

let h1 = document.querySelector("h1");
let span = document.querySelector("span")

// console.log(h1.parentNode.parentNode);

// h1.parentNode.parentNode.parentNode.style.backgroundColor = "red";

// console.log(h1.nextElementSibling.firstElementChild.innerText);

// console.log(h1.previousElementSibling); 

// console.log(h1.nextElementSibling.children[1].innerText);

// console.log(span.closest(".item").children[0].innerText);



// let elems = span.closest(".item").children;

// console.log(elems);

// for (const elem of elems) {
//     elem.style.color = "blue";
// }



// let elem = document.querySelector(".apple ul li:last-child a");

// elem.parentNode.parentNode.parentNode.previousElementSibling.style.backgroundColor = "red";

// elem.closest(".apple").previousElementSibling.style.backgroundColor = "red";




// let button = document.querySelector("button")

// button.addEventListener("click", function(){
//     this.previousElementSibling.style.backgroundColor = "blue"
// })





//INPUT


let input = document.querySelector("#blog input");


// input.addEventListener("blur", function(){   //inputa yazib, kenara toxunduqda inputun yazilari silinir. inputa nese yazmadiqda kenara basdiqda iwleyir
//     this.value = "";
// })


// input.addEventListener("focus",inputEvent)    // focux inputa focus olanda iwleyir

// input.addEventListener("change",inputEvent)       //change blurla oxwardir. changede inputa nese yazmadiqda kenara basdiqda iwlemir.

// input.addEventListener("keydown",inputEvent)      //yazini yazdigimiz anda basdiqca iwleyir, buraxdiqda dayanir

// input.addEventListener("keyup",inputEvent)           //elimizi klaviaturadan chekdikde yazir

// input.addEventListener("keypress",inputEvent)          //yazdigimiz herf qeder iwleyir


// function inputEvent() {                      //input uchun hazir method
//     console.log("input event");
// }





// input.addEventListener("keypress", function(event){
//     if(event.keyCode === 13){
//         event.preventDefault();
//         document.querySelector(".test").click();
//     }
// })

// document.querySelector(".test").onclick = function(){
//     alert("trigged")
// }

