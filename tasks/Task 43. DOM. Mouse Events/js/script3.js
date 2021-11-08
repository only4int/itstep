document.querySelector(".parent").onmouseenter = function(event){
    event.target.classList.add("bg-blue")
}
document.querySelector(".child").onmouseenter = function(event){
    event.target.classList.add("bg-black")
    event.target.parentElement.classList.remove("bg-blue")
}
document.querySelector(".parent").onmouseleave = function(event){
    event.target.classList.remove("bg-blue")
}
document.querySelector(".child").onmouseleave = function(event){
    event.target.classList.remove("bg-black")
    event.target.parentElement.classList.add("bg-blue")
}