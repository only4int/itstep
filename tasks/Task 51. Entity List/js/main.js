var counter = 1;

document.forms.cat_form.onsubmit = function () {
    
    if(document.querySelector(".editable"))
        return false;

    let name = this.name.value;
    if(name == "")
        return false;

    let color = this.color.value;

    let breed = this.breed.value;

    if(!breed)
        return false;

    let sex = this.sex.value;

    let pattern = ` <tr data-id="${counter}">
                        <td>${counter}</td>
                        <td>${name}</td>
                        <td>
                            <div class="color-block" style="background: ${color};">

                            </div>
                        </td>
                        <td>${breed}</td>
                        <td>${(sex == "M") ? "Кот" : "Кошка"}</td>
                        <td>
                            <button type="button" class="btn btn-success">✎</button>
                            <button type="button" class="btn btn-danger">×</button>
                        </td>
                    </tr>`;

    document.querySelector("table tbody").insertAdjacentHTML("beforeend",pattern);
    counter++;
    
    this.reset();

    return false;
}

document.querySelector("table tbody").onclick = function(event){

    let btn = event.target;

    if(!btn.classList.contains("btn-danger"))
        return false;

    btn.closest("tr").remove();

    return false;
}

document.querySelector("table tbody").addEventListener("click", function(event){

    let btn = event.target;

    if(!btn.classList.contains("btn-success"))
        return false;
    
    let currentElement = btn.closest("tr");

    currentElement.classList.add("editable");

    let form = document.forms.cat_form;

    form.name.value = currentElement.children.item(1).textContent;
    form.color.value = currentElement.children.item(2).firstElementChild.style.backgroundColor;

    form.breed.value = currentElement.children.item(3).textContent;

    if(currentElement.children.item(4).textContent == "Кот"){
        form.sex.value = "M";
    } else {
        form.sex.value = "F";
    }

    document.querySelector(".add").classList.add("d-none");
    document.querySelector(".save").classList.remove("d-none");

    return false;
});


document.forms.cat_form.addEventListener("submit", function(){
    
    let  currentElement = document.querySelector(".editable")
    
    if(!currentElement)
        return false;

    let form = this;

    currentElement.children.item(1).textContent = form.name.value;

    currentElement.children.item(2).firstElementChild.style.backgroundColor = form.color.value;

    currentElement.children.item(3).textContent = form.breed.value;

    if(form.sex.value == "M"){
        currentElement.children.item(4).textContent = "Кот";
    } else {
        currentElement.children.item(4).textContent = "Кошка";
    }    
    currentElement.classList.remove("editable");

    document.querySelector(".save").classList.add("d-none");
    document.querySelector(".add").classList.remove("d-none");   

    form.reset();
    
    return false;
});