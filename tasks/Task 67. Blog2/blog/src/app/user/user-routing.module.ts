import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FormUserComponent } from './formuser/formuser.component';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  {
    path: "", component: UserComponent,
  },
   {
    path: "edit", component: FormUserComponent, pathMatch: 'full'
  }, 
     {
    path: "edit/:id", component: FormUserComponent
  },
     {
    path: ":id", component: UserDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
