import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    children: [{ path: '', component: LoginComponent }],
    data: {
      layoutName: 'layoutOne'
    },
  },
  {
    path: 'welcome', component: WelcomeComponent,
    children: [{ path: '', component: WelcomeComponent }],
    data: {
      layoutName: 'layoutOne'
    },
  },


  {
    path: '', component: LoginComponent,
    children: [{ path: '', component: LoginComponent }],
    data: {
      layoutName: 'layoutOne'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
