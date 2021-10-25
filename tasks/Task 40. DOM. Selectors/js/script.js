let element = document.getElementById("first-element");

let elements = document.getElementsByTagName("div");

console.log(elements.length);

let sections = document.getElementsByClassName("first-section");

let section = sections.item(0);// sections[0];

let sectionDivs = section.getElementsByTagName("div");

console.log(sectionDivs.length);

let divs = document.querySelectorAll(".first-section div");

console.log(divs.length);

sections = document.getElementsByClassName("first-section");

section = sections.item(0);// sections[0];

let neighbors = section.getElementsByClassName("neighbor");


for(let i = 0; i < neighbors.length; i++){
    neighbors.item(i).innerHTML =  "Я хороший сосед";
}