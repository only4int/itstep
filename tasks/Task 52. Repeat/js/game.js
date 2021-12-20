let n = 6, m = 6, counter = 0, isFinish = false;

document.querySelector("table").onclick = function(event){
    if(isFinish)
        return false;

    let td = event.target;

    if(td.tagName != "TD")
        return false;

    td.classList.toggle("check");
    if(td.previousElementSibling)
        td.previousElementSibling.classList.toggle("check");

    if(td.nextElementSibling)
        td.nextElementSibling.classList.toggle("check");
    
    
    if(td.parentElement.previousElementSibling)
        td.parentElement.previousElementSibling.children.item(td.cellIndex).classList.toggle("check");
    
    if(td.parentElement.nextElementSibling)
        td.parentElement.nextElementSibling.children.item(td.cellIndex).classList.toggle("check");
    
    counter++;

    if(document.querySelectorAll(".check").length == m*n){
        document.querySelector("caption").textContent = `Игра окончена за ${counter} ходов`;
        isFinish = true;
    }
    else{
        document.querySelector("caption span").textContent = counter;
    }

    return false;
}