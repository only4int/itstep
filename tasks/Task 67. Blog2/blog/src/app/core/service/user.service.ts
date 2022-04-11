import { User } from '../model';

export class UserService {

    constructor() { }

    data: Array<User> = [
        {
            id: 1,
            name: 'Вася Пупкин',
            login: "admin",
            password: "12345"
        },
        {
            id: 2,
            name: 'Петя Ножкин',
            login: "user",
            password: "qwerty"
        },
    ]

    newUserId = 3; // ID нового пользователя

    currentUserId = 1; //ID активного пользователя

    getCurrentUserId(){
        return this.currentUserId;
    }

    getCurrentUser(){
        return this.getById(this.currentUserId);
    }

    getNewUserId(){
        return this.newUserId;
    }
    get(): Array<User>{
        return this.data;
    }

    create(user: User){
        this.data.push(user);
        this.newUserId++;
    }

    remove(id: number): boolean{
         let index = this.data.findIndex(function(item:User){
            return item.id == id;
        });

        if(index !== -1)
            return Boolean(this.data.splice(index, 1));

        return false;
    }

    getById(id: number): User{
        let index = this.data.findIndex(function(item:User){
            return item.id == id;
        });

        return this.data[index];
    } 

    signIn(login: string, password: string): boolean{
         let index = this.data.findIndex(function(item:User){
            return item.login == login && item.password == password;
        });

        if(index !== -1){
            this.currentUserId = this.data[index].id;
            return true;
        }

        return false;
    }
}
