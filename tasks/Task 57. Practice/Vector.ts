class Vector{
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z:number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getLength(): number{
        return (this.x**2 + this.y**2 + this.z**2)**0.5;
    }

    getScalarMul(vector: Vector): number{
        return this.x*vector.x + this.y*vector.y + this.z*vector.z;
    }

    static getRandomVectors(n: number): Vector[] {
        const vectors: Array<Vector> = [];
        for(let i:number = 0; i< n; i++){
            let x = Math.ceil(Math.random()*10);
            let y = Math.ceil(Math.random()*10);
            let z = Math.ceil(Math.random()*10);
            vectors.push(new Vector(x,y,z));
        }
        return vectors;
    }
}

const vector1 = new Vector(1,2,3);
const vector2 = new Vector(3,2,1);
console.log(vector1, vector2);
console.log(vector1.getLength());
console.log(vector1.getScalarMul(vector2));

console.log(Vector.getRandomVectors(2));