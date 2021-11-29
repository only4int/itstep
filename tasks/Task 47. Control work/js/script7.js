document.querySelector("table").onmouseover = function(event){

    let td = event.target;

    if(td.tagName != "TD")
        return false;

    let tds = td.parentElement.children;

    Array.from(tds).forEach(function(item){
        item.classList.add("hover");
    });

    let numColumns = td.cellIndex; // номер столбца

    tds = document.querySelectorAll(`tr td:nth-child(${numColumns+1})`);

    Array.from(tds).forEach(function(item){
        item.classList.add("hover");
    });
}

document.querySelector("table").onmouseout = function(event){
    let td = event.target;

    if(td.tagName != "TD")
        return false;    
    
    let tds = document.querySelectorAll("td.hover");

    Array.from(tds).forEach(function(item){
        item.classList.remove("hover");
    });   
}
