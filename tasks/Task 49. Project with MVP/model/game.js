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

}