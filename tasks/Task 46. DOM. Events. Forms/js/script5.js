document.forms.user.onsubmit = function (event) {

    let formData = new FormData(this);
    let hasError = false;

    //let name = formData.get("name");
    let name = this.name.value; 
   /* if(name == "")
        {
        hasError = true;
        showError("Не заполнено поле",this.name);
        }
    else{
        hideError(this.name);
    }
    */
    let email = this.email.value; //email

    let sex = this.sex.value;
    console.log(sex);

    let lang = this.lang.value;
    console.log(lang);

    let robot = this.robot.value;
    if(this.robot.checked)
        console.log(robot);
    else
        console.log("Вы робот");
    /*if(hasError)
        return false;
    else{
        this.style.display = "none";
    }
    */
    return false;
}

function showError(textError,element) {
    element.parentNode.parentNode.classList.add("error");

    let div = document.createElement("div");
    div.classList.add("error-text");
    div.textContent = textError;
    element.parentNode.parentNode.append(div);
}

function hideError(element) {
    element.parentNode.parentNode.classList.remove("error");

    let div = element.parentNode.parentNode.querySelector("error-text");
    if(div)
        div.remove();
}