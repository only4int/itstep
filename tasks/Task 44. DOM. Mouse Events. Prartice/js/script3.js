function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".first").onclick = function(){
    let chess = document.querySelector(".chess");
    if(chess)
        chess.remove();

    chess = document.createElement("div");
    chess.classList.add("chess");

    let x = getRandomNumber(0,15);

    document.querySelectorAll(".box > div").item(x).append(chess);
}

document.querySelector(".second").onclick = function(){
    let cells =  document.querySelectorAll(".box > div");

    cells.forEach(function(cell){
        cell.classList.toggle("white");
        cell.classList.toggle("black");
    });
}
var angle = 0;
document.querySelector(".third").onclick = function(){
    angle += 90;
    document.querySelector(".box").style.transform = `rotate(${angle}deg)`;
}