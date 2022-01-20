interface IPhone {    
    number: string;
    model: string;
    weight: number;
}

class Phone{
    number: string;
    model: string;
    weight: number;

    constructor();
    constructor(obj: IPhone);
    constructor(obj?: any){
        this.number = obj && obj.number || "";
        this.model = obj && obj.model || "";
        this.weight = obj && obj.weight || 0;
    }


    receiveCall(name: string):void{
        console.log(`Звонит ${name}`);
    }
}

const phone1 = new Phone();
const phone2 = new Phone({number:"123123",model:"Nokia",weight: 200});