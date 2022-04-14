import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { 
     //this.user = userService.getCurrentUser();
  }
  user: User = {} as User;
  isAuth: boolean = false;
  ngOnInit(): void {
      this.userService.currentUser.subscribe(
        (userData) => {
          this.user = userData;
        }
      )
      this.userService.isAuth.subscribe(
        (isAuth) => {
          this.isAuth = isAuth;
        }
      );  
    }

}
