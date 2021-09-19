import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLoginLayoutComponent } from './shared/layouts/post-login-layout/post-login-layout.component';
import { PreLoginLayoutComponent } from './shared/layouts/pre-login-layout/pre-login-layout.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'',
    component:PreLoginLayoutComponent,
    children:[
      {
        path:'login',
        loadChildren: () => import('./views/pre-login/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path:'',
    component:PostLoginLayoutComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('./views/post-login/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'profile',
        loadChildren: () => import('./views/post-login/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
