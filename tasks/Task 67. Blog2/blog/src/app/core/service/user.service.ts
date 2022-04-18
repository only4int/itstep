import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

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
    currentUserId = 1; //ID активного пользователя

    currentUserSubject = new BehaviorSubject<User>({} as User);
    currentUser = this.currentUserSubject.asObservable();

    isAuthSubject = new BehaviorSubject<boolean>(false);
    isAuth = this.isAuthSubject.asObservable();

    newUserId = 3; // ID нового пользователя

   

    getCurrentUserId(){
        return this.currentUserId;
    }

    getCurrentUser(){
        return this.getById(this.currentUserId);
    }

    get():Observable<any>{
        return this.http.get("/api/users")
    }

    create(user: any): Observable<any>{
        console.log(user);
        return this.http.post("/api/users",
        JSON.stringify(user),
        {'headers':{'content-type': 'application/json'}  });
    }

    remove(id: number): Observable<any>{
        return this.http.delete("/api/users/"+id);
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
            this.currentUserSubject.next(this.data[index]);
            this.isAuthSubject.next(true);
            return true;
        }

        return false;
    }
}
