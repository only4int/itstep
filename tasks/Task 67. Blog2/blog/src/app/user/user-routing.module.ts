import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FormUserComponent } from './formuser/formuser.component';
import { UserResolverService } from './user-resolver.service';
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
    path: "edit/:id", component: FormUserComponent, resolve: { user: UserResolverService }
  },
     {
    path: ":id", component: UserDetailComponent, resolve: { user: UserResolverService }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
