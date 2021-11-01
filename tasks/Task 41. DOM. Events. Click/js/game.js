function getRandomNumber(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x = getRandomNumber(1,100);
var count = 0;

document.getElementById("guess").onclick = function(){
        let number = +document.getElementById("num").value;
        if(number !== number)
                return;
        count++;
        if( x > number){
                document.getElementById("result").innerHTML = "малова-то";
        } else if( x < number){
                document.getElementById("result").innerHTML = "многова-то";
        } else {
                document.getElementById("result").innerHTML = `Угадано за ${count} попыток. Отгадай еще раз`;
                x = getRandomNumber(1,100);
                count = 0;
        }
}