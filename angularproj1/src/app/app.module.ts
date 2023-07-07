import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';

//import { HttpClientModule } from '@angular/common/http';


console.log('app.module.ts file');

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    DirectivesInAngularComponent,
    LifecyclehooksComponent,
    ParentComponent,
    ChildComponent,
    FormComponent,
    
  ],
  imports: [
    //FormsModule,
    //ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    //HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


