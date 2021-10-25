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

for(let i = 0; i < neighbors.length; i++){
    let x = neighbors.item(i).innerHTML;
    neighbors.item(i).innerHTML = `<span>${x}</span>`;
}
for(let i = 0; i < neighbors.length; i++){
    let neighbor = neighbors.item(i);
    console.log(neighbor);
    let span = neighbor.getElementsByTagName("span").item(0);
    //span.outerHTML = `<b>${span.innerHTML}</b>`;
    let b = document.createElement("b");
    b.innerHTML = span.innerHTML;
    neighbor.innerHTML = "";
    neighbor.appendChild(b);
}