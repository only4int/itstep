document.querySelector("input").onkeyup = function(event){

    let str = this.value;

    let text = document.querySelector("p").textContent;

    let newText = text.replaceAll(str, `<span>${str}</span>`);

    document.querySelector("p").innerHTML = newText;
    
}