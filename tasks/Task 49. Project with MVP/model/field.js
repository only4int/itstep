class Field {
    cells; // 0 - пусто, 1 - крестик, -1 - нолик

    constructor(){
        this.cells = [[0,0,0],[0,0,0],[0,0,0]];
    }

    addX(x,y){
        this.cells[x][y] = 1;
    }

    addO(x,y){
        this.cells[x][y] = -1;
    }
}