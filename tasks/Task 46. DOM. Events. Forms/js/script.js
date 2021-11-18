colors.onchange = function(event){
    let color = this.value;
    document.querySelector("div").style.background = color;
}

let options = document.querySelectorAll("option");
options.forEach(element => {
    element.style.background = element.value;
});