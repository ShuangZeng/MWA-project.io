import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UsersComponent } from './admin/users/users.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import { AceEditorModule } from 'ng2-ace-editor';
import { BLockPassGuardFlatService } from './webService/b-lock-pass-guard--flat.service';
=======
import { AdminComponent } from './admin/admin.component'
import { StaffComponent } from './staff/staff.component'
import { LoginPageComponent }from './login-page/login-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component'
import { StudentService } from './webService/staff.service';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';


import { UsersComponent } from './admin/users/users.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatTabsModule,MatSlideToggleModule} from '@angular/material';

import { BLockPassGuardFlatService } from './webService/b-lock-pass-guard--flat.service'
>>>>>>> 4d2af1cebad6899bd390f3334821dce09e1aedfa
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './webService/token-interceptor.service';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: 'homex', component: AppComponent },
  {path: '', component: LoginPageComponent},
  {path: 'student', component: StudentComponent},
  {path: 'admin',  component: AdminComponent, children: [
    { path: 'users', component: UsersComponent},
    { path: 'questions', component: QuestionsComponent}
    ],canActivate: [BLockPassGuardFlatService]},
  {path: 'staff', component: StaffComponent,canActivate: [BLockPassGuardFlatService]},
  {path: 'passwordlessAuth/:token/:userid', component: PasswordlessAuthComponent},
  {path: '**', component: NoPageFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StaffComponent,
    LoginPageComponent,
    NoPageFoundComponent,
    PasswordlessAuthComponent,
    UsersComponent,
    QuestionsComponent,
    StudentComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    AceEditorModule,
    MatButtonModule, MatCheckboxModule , MatTabsModule, MatFormFieldModule,
=======
    MatButtonModule, MatCheckboxModule,MatTabsModule,MatFormFieldModule,MatSlideToggleModule,
>>>>>>> 4d2af1cebad6899bd390f3334821dce09e1aedfa
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})

  ],

  providers: [StudentService,BLockPassGuardFlatService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
