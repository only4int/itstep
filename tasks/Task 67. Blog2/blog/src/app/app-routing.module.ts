import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)  
  },
   {
    path: "post",
    loadChildren: () => import('./post/post.module').then(module => module.PostModule),
    canActivate: [AuthGuard]  
  }, 
     {
    path: "user",
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)  
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: 'legacy'
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
