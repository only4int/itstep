class GameController{

    game;

    login(){
        document.forms.start_form.classList.add("d-none");
        document.forms.login_form.classList.remove("d-none");
        return false;
    }

    createGame(){

    }

    start(){
        document.forms.login_form.classList.add("was-validated");
        if(document.forms.login_form.checkValidity())
            {
            document.forms.login_form.classList.remove("was-validated");
            document.forms.login_form.classList.add("d-none");
            
            //this.createGame();
            let utils = new Utils();
        
            let player1, player2;
    
            if(utils.getRandomNumber(1,2) == 1){

                player1 = new Player(document.forms.login_form.player1_name.value);
                player2 = new Player(document.forms.login_form.player2_name.value);
            } else{

                player1 = new Player(document.forms.login_form.player2_name.value);
                player2 = new Player(document.forms.login_form.player1_name.value);
            }
    
            this.game = new Game(player1, player2);

            let table = document.createElement("table");
            for(let i = 0; i < 3; i++){
                let row = document.createElement("tr");
                    
                for(let j = 0; j < 3; j++){
                    let data = document.createElement("td");
                    row.append(data)
                    } 
                table.append(row);  
            }
                    
            table.addEventListener("click", this.play, false);
        
            document.querySelector(".field").append(table);

           // this.createField();

            document.querySelector(".current").innerHTML = `Ходит игрок <b>${this.game.getCurrentPlayerName()}</b>`;
            document.querySelector(".game_form").classList.remove("d-none");
            }
            
        return false;
    }

    createField(){

    }

    play(event){
        
        let td = event.target;
    
        if(td.tagName != "TD")
            return false;  
    
        let x = td.cellIndex;    
        let y = td.parentNode.rowIndex;
        
        if(this.game.field.cells[x][y] != 0)
            return false;
    
        if(this.game.currentPlayer == 1){
            this.game.logs.addMove(this.game.getCurrentPlayerName(),x,y,1);
            td.classList.add("k");
            this.game.currentPlayer = 2;
            this.game.field.addX(x,y);
            
        } else {
            this.game.logs.addMove(this.game.getCurrentPlayerName(),x,y,-1);
            td.classList.add("n");
            this.game.currentPlayer = 1;
            this.game.field.addO(x,y);         
        }

        this.showLog();

        let winner = this.game.checkWinner();
        if(winner > 0){
            document.querySelector(".result").innerHTML = `Победил игрок <b>${this.game.getCurrentPlayerName()}</b>`;
            document.querySelector(".current").innerHTML = ``;
            document.querySelector(".field table").removeEventListener("click", this.play, false);
        } else if(this.game.checkDraw()){
            document.querySelector(".current").innerHTML = ``;
            document.querySelector(".field table").removeEventListener("click", this.play, false);
            document.querySelector(".result").innerHTML = `Ничья`;
        } else {
            document.querySelector(".current").innerHTML = `Ходит игрок <b>${this.game.getCurrentPlayerName()}</b>`;
        }       
    }

    showLog(){

    }
}