import { Client } from "../model/client.js";
import { Review } from "../model/review.js";
import { Request } from "../model/request.js";

class ClientController{

    static create(name, login, password){
        let newClient = new Client(name, login, password);
        return newClient;
    }

    static update(client, name, login, password){
        client.name = name;
        client.login = login;
        client.password = password;

        return client;
    }

    static createReview(client, text, date,rate){
        let  review = new Review(client, text, date,rate);
        return review;
    }

    static createRequest(client, pathLength, comfort, hasBabyChair, capacity, comment){
        let newRequest = new Request(client, pathLength, comfort, hasBabyChair, capacity, comment);
        return newRequest;
    }

}
export{ClientController};