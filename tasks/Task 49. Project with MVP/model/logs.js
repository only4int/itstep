class Log {
    moves; // 0 - пусто, 1 - крестик, -1 - нолик

    constructor(){
        this.moves = [];
    }

    addMove(name,x,y,figure){
        if(figure == 1)
            this.moves.push(`Игрок <i>${name}</i> поставил крестик в клетку [${x},${y}]`);
        else
            this.moves.push(`Игрок <i>${name}</i> поставил нолик в клетку [${x},${y}]`);
    }
}