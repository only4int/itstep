class Field {
    cells; // 0 - пусто, 1 - стена, 2 - мина
    m;
    n;

    constructor(m,n){
        this.m = m;
        this.n = n;
        this.cells = Array(m);

        for(let i = 0; i < m; i++){
            this.cells[i] = Array(n).fill(0);
        }
    }

    addWall(x,y){
        this.cells[x][y] = 1;
    }

    addMine(x,y){
        this.cells[x][y] = 2;
    }

    removeMine(x,y){
        this.cells[x][y] = 0;
    }

    show(){
        for(let i=0; i < this.m; i++){
            for(let j=0; j < this.n; j++){
                let div = document.createElement("div")
                if(this.cells[i][j] == 1)
                    div.classList.add("wall");
                document.querySelector(".field").append(div)
            }
        }
    }
}