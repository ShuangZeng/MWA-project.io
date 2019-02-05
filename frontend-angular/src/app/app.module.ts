import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
//alert module libs
import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component'
import { StaffComponent } from './staff/staff.component'
import { LoginPageComponent }from './login-page/login-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component'
import { StudentService } from './webService/staff.service';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';
const routes: Routes = [
  {path: 'homex', component: AppComponent },
  {path: '', component: LoginPageComponent},
  {path: 'admin',  component: AdminComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'passwordlessAuth/:token/:userid', component: PasswordlessAuthComponent},
  {path: '**', component: NoPageFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StaffComponent,
    LoginPageComponent,
    NoPageFoundComponent,
    PasswordlessAuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
