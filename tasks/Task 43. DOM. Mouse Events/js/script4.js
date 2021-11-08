document.querySelector(".parent").onmouseenter = function(event){
    event.target.classList.add("bg-blue")
}
document.querySelector(".child").onmouseenter = function(event){
    event.target.classList.add("bg-black")
}
document.querySelector(".parent").onmouseleave = function(event){
    event.target.classList.remove("bg-blue")
}
document.querySelector(".child").onmouseleave = function(event){
    event.target.classList.remove("bg-black")
}