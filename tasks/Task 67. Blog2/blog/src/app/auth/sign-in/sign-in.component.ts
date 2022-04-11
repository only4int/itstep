import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  isAuth: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.form = new FormGroup({
      login: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {

  }

  singIn(){
    if(this.form.invalid)
      return false;

    if(this.userService.signIn(this.form.controls["login"].value,this.form.controls["password"].value)){
      this.isAuth = true;
      this.router.navigate(["/"]);
      return;
    }
    this.isAuth = false;
    return;
    
  }
}
