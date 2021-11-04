document.getElementById("calc").onclick = function(){
    let x = + document.getElementsByTagName("p").item(0).textContent;
    x++;
    document.getElementsByTagName("p").item(0).textContent = x;
}