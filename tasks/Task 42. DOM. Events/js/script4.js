document.getElementById("calc").onclick = function(){
    let x = document.getElementById("a").value;
    let y = document.getElementById("b").value;

    document.getElementById("a").value = y;
    document.getElementById("b").value = x;
}