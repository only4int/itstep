class Game{
    player1;
    player2;
    currentPlayer;
    field;
    logs;
    
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.field = new Field();
        this.logs = new Log();
    }

    getCurrentPlayerName(){
        if(this.currentPlayer == 1)
            return this.player1.name;
        else 
            return this.player2.name;
    }

    checkWinner() {
        let result = Array(8).fill(0);
        //сумма по строкам
        for(let i = 0; i < 3; i++){
            let sum = 0;
            for(let j = 0; j < 3; j++){
                sum += this.field.cells[i][j];
            }
            result[i] = sum;
        }
    
        //сумма по столбцам
        for(let i = 0; i < 3; i++){
            let sum = 0;
            for(let j = 0; j < 3; j++){
                sum += this.field.cells[j][i];
            }
            result[i+3] = sum;
        }
    
        //сумма по главной диагонали
        let sum = 0;
        for(let i = 0; i < 3; i++){
            sum += this.field.cells[i][i];
        }
        result[6] = sum;
        //сумма по побочной диагонали
        sum = 0;
        for(let i = 0; i < 3; i++){
            sum += this.field.cells[i][2-i];
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

    checkDraw(){
        let count = 0;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(this.field.cells[i][j] == 0)
                    count++;
            }
        }
        if(count == 0)
            return true;
        else
            return false;
    }
}