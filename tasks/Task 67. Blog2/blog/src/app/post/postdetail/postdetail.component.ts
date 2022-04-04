import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostDetailComponent implements OnInit {

    ngOnInit(): void {
        this.route.data.subscribe(data =>{
            if(data["post"])
                this.post = data["post"];
            if(data["comments"])
                this.comments = data["comments"];
        });
    }

    post: any;
    comments: any;
    constructor(private route: ActivatedRoute, private userService: UserService,private router: Router) { 

    }

    getUserName(userId: number): string{
        return this.userService.getById(userId)?.name;
    }

}
