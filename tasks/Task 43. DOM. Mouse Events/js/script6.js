document.querySelector(".parent").onclick = function(event){
    if(event.altKey){
        console.log("Зажата клавиша ALT");
    }
    if(event.shiftKey){
        console.log("Зажата клавиша SHIFT");
    }
    if(event.ctrlKey){
        console.log("Зажата клавиша CTRL");
    }
    if(event.metaKey){
        console.log("Зажата клавиша WIN");
    }
}