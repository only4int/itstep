import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)  
  },
   {
    path: "post",
    loadChildren: () => import('./post/post.module').then(module => module.PostModule)  
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
