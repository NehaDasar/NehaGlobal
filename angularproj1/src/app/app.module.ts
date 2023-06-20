import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { FormsModule } from '@angular/forms';


console.log('app.module.ts file');

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    DirectivesInAngularComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
