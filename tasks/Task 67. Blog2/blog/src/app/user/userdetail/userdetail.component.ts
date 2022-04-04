import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserDetailComponent implements OnInit {

    user: User = {} as User;
   
    constructor(private route: ActivatedRoute, private userService: UserService, router: Router) { 

    }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if(data["user"])
        this.user = data["user"];
    })
  }

}
