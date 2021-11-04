document.getElementById("calc").onclick = function(){
    
    let str = document.querySelector("input").value;

    let newStr = str.split("").filter(function (item) {
       return isNaN(+item) == true; 
    }).join("");

    document.querySelector("input").value = newStr;
}