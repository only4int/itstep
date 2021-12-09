var editElement = null;

document.forms.todo_form.onsubmit = function(){

    if(editElement != null){
        editElement.firstChild.textContent = this.task.value;
        this.task.value = "";
        editElement = null;
        document.querySelector(".btn").innerHTML = "Добавить";
        return false;
    }

    let item = this.task.value;
    if(item.trim() == "")
        return false;

    let li = document.createElement("li");
    li.textContent = item.trim();
    let edit = document.createElement("span");
    edit.classList.add("edit");
    edit.textContent = "✎";
    li.append(edit);
    let close = document.createElement("span");
    close.classList.add("close");
    close.textContent = "×";
    li.append(close);
    list.append(li);
    this.task.value = "";
    return false;
}

document.querySelector("ul").onclick = function(event){
    let current = event.target;

    if(current.tagName != "LI")
        return false;

    current.classList.toggle("checked");

    return false;
}

document.querySelector("ul").addEventListener("click", function (event) {
    let current = event.target;
    
    if(!current.classList.contains("close"))
        return false;

    current.parentElement.remove();

    return false;
})

document.querySelector("ul").addEventListener("click", function (event) {
    let current = event.target;
    
    if(!current.classList.contains("edit"))
        return false;

    editElement = current.closest("li");

    task.value = editElement.firstChild.textContent;
    
    document.querySelector(".btn").innerHTML = "Сохранить";

    return false;
})