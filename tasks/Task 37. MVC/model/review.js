class Review{
    client;
    date;
    rate;
    text;
    constructor(client, date, rate, text){
        this.client = client;
        this.date = date;
        this.rate = rate;
        this.text = text;
    }
}
export{Review};