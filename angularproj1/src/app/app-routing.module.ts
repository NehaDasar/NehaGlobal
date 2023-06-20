import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';

const routes: Routes = [
  { path : '', component : LoginComponent},
  { path : 'signup', component : SignUpComponent},
  { path : 'login', component : LoginComponent},
  { path : 'landing', component : LandingComponent},
  { path : 'directives', component : DirectivesInAngularComponent},
  { path : 'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
