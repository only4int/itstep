document.getElementById("calc").onclick = function(){
    
    let href = document.querySelectorAll("a").item(0).href;


    document.querySelectorAll("a").item(0).textContent = href;
}