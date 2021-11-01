function myclick(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x+y;

    button2.style.background = "white";
}

calc.onclick = function(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    let operation = document.getElementById("o").value;
    let res;
    switch(operation){
        case "+":
                res = x+y;
                break;
        case "-":
                res = x-y;
                break;
        case "*":
                res = x*y;
                break;
        case "/":
                res = x/y;
                break; 
        default:
                res = 'Error'; 
    }
    result.innerHTML = res;
}