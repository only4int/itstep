import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormUserComponent } from './formuser/formuser.component';
import { UserDetailComponent } from './userdetail/userdetail.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserResolverService } from './user-resolver.service';



@NgModule({
  declarations: [
    UserComponent,
    FormUserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers:[UserResolverService]
})
export class UserModule { }
