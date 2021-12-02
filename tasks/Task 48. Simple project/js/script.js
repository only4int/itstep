function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player = [];
var current = 1;
var field = [[0,0,0],[0,0,0],[0,0,0]];

document.forms.start_form.start_play.onclick = function () {
    document.forms.start_form.classList.add("d-none");
    document.forms.login_form.classList.remove("d-none");
    return false;
}

document.forms.login_form.start_game.onclick = function () {
    document.forms.login_form.classList.add("was-validated");
    if(document.forms.login_form.checkValidity())
        {
        document.forms.login_form.classList.remove("was-validated");
        document.forms.login_form.classList.add("d-none");
        
        current = getRandomNumber(1,2);

        if(current == 1){
            player[1] = document.forms.login_form.player1_name.value;
            player[2] = document.forms.login_form.player2_name.value;
        } else{
            player[2] = document.forms.login_form.player1_name.value;
            player[1] = document.forms.login_form.player2_name.value;
        }

        let table = document.createElement("table");
        for(let i = 0; i < 3; i++){
            let row = document.createElement("tr");
            
            for(let j = 0; j < 3; j++){
                let data = document.createElement("td");
                row.append(data)
                } 
            table.append(row);  
            }
            
        table.addEventListener("click",play, false);

        document.querySelector(".field").append(table);
        document.querySelector(".current").innerHTML = `Ходит игрок <b>${player[current]}</b>`;
        document.querySelector(".game_form").classList.remove("d-none");
        }
    return false;
}

function play(event){

    let td = event.target;

    if(td.tagName != "TD")
        return false;  

    let x = td.cellIndex;    
    let y = td.parentNode.rowIndex;

    if(field[x][y] != 0)
        return false;

    if(current == 1){
        td.classList.add("k");
        current = 2;
        field[x][y] = 1
    } else {
        td.classList.add("n");
        current = 1;
        field[x][y] = -1;
    }

    let winner = checkWinner();
    if(winner > 0){
        document.querySelector(".result").innerHTML = `Победил игрок <b>${player[winner]}</b>`;
        document.querySelector(".current").innerHTML = ``;
        document.querySelector(".field table").removeEventListener("click", play, false);
    } else if(checkDraw()){
        document.querySelector(".current").innerHTML = ``;
        document.querySelector(".field table").removeEventListener("click", play, false);
        document.querySelector(".result").innerHTML = `Ничья`;
    } else {
        document.querySelector(".current").innerHTML = `Ходит игрок <b>${player[current]}</b>`;
    }

    
}

function checkWinner() {
    let result = Array(8).fill(0);
    //сумма по строкам
    for(let i = 0; i < 3; i++){
        let sum = 0;
        for(let j = 0; j < 3; j++){
            sum += field[i][j];
        }
        result[i] = sum;
    }

    //сумма по столбцам
    for(let i = 0; i < 3; i++){
        let sum = 0;
        for(let j = 0; j < 3; j++){
            sum += field[j][i];
        }
        result[i+3] = sum;
    }

    //сумма по главной диагонали
    let sum = 0;
    for(let i = 0; i < 3; i++){
        sum += field[i][i];
    }
    result[6] = sum;
    //сумма по побочной диагонали
    sum = 0;
    for(let i = 0; i < 3; i++){
        sum += field[i][2-i];
    }
    result[7] = sum;

    let resK = Math.max.apply(null, result);
    let resN = Math.min.apply(null, result);

    if(resK == 3)
        return 1;

    if(resN == -3)
        return 2;

    return 0;
}

function checkDraw(){
    let count = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(field[i][j] == 0)
                count++;
        }
    }
    if(count == 0)
        return true;
    else
        return false;
}