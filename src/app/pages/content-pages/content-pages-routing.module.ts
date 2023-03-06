import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from "./error/error-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error',
        component: ErrorPageComponent,
        data: {
          title: 'Error Page'
        }
      },
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent,
        data: {
          title: 'Forgot Password'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
