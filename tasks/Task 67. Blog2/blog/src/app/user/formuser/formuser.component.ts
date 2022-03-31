import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormUserComponent implements OnInit {

  form: FormGroup;
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router) { 
    this.form = new FormGroup({
        "name": new FormControl("",[Validators.required, Validators.minLength(6)]),
        "login": new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Z][a-zA-Z]*')]),
        "password": new FormControl("",[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')])  
    })
  }

  ngOnInit(): void {

  }

  addUser(){
    if(this.form.invalid)
            return;
    let newUserId = this.userService.getNewUserId();
    this.user = {
      id: newUserId,
      name: this.form.controls["name"].value,
      login: this.form.controls["login"].value,
      password: this.form.controls["password"].value
    }

    this.userService.create(this.user);
    this.form.reset();
    this.router.navigate(["/user"]);

  }
}
