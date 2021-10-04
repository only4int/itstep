class Matrix{
    cells;
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

    setCellValue(x,y, value){
        this.cells[x][y] = value;
    }

    getCellValue(x,y){
        return this.cells[x][y];
    }

    addMatrix(A){
        let B = new Matrix(this.m, this.n);
        for(let i= 0; i <this.m; i++){
            for(let j = 0; j < this.n; j++ ){
                let x = this.getCellValue(i,j)+A.getCellValue(i,j);
                B.setCellValue(i,j, x);
            }
        }
        return B;
    }

    multipleByValue(c){
        let B = new Matrix(this.m, this.n);
        for(let i= 0; i <this.m; i++){
            for(let j = 0; j < this.n; j++ ){
                let x = this.getCellValue(i,j)*c;
                B.setCellValue(i,j, x);
            }
        }
        return B;
    }

    show(){
        console.table(this.cells);
    }
}

export {Matrix};