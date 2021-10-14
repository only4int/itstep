import { User } from "../model/user.js";

class Client extends User{
    constructor(name, login, password){
        super(name, login, password);
    }
}
export{Client};