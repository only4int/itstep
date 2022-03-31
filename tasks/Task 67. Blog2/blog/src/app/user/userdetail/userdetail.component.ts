import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserDetailComponent implements OnInit {

    user: User = {} as User;
    private PostSubcription: Subscription;
    constructor(private route: ActivatedRoute, private userService: UserService) { 
        this.PostSubcription = route.params.subscribe(
            params => {
                this.user = userService.getById(params['id']); 
            } 
        );
    }

  ngOnInit(): void {
  }

}
