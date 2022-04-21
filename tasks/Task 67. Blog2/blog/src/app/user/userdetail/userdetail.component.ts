import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserDetailComponent implements OnInit {

    user: User = {} as User;
   
    constructor(private route: ActivatedRoute, private userService: UserService) { 

    }
    
    
    ngOnInit(): void {
        this.userService.getById(this.route.snapshot.params["id"]).subscribe(
            (data) => {
                this.user = data;
            }
        );
    }

}
