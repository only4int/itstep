let element = document.getElementById("first-element");
console.log(element.tagName);
console.log(element);
element.classList.add("www");
// - Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
let elements = ["createElement", "appendChild", "insertBefore"];

let out = "<ul>";

elements.forEach(function(item){
    out += `<li>${item}</li>`;
});

out += "</ul>";

element.innerHTML += out;

let newList = document.createElement("ul");

elements.forEach(function(item){
    let newItem = document.createElement("li");
    newItem.innerHTML = item;
    newList.appendChild(newItem);
});

element.appendChild(newList);