import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
//alert module libs
import { AlertModule } from 'ngx-alerts';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component'
import { StaffComponent } from './staff/staff.component'
import { LoginPageComponent }from './login-page/login-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component'
import { UsersComponent } from './admin/users/users.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';

import { BLockPassGuardFlatService } from './webService/b-lock-pass-guard--flat.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './webService/token-interceptor.service';

const routes: Routes = [
  {path: 'homex', component: AppComponent },
  {path: '', component: LoginPageComponent},
  {path: 'admin',  component: AdminComponent, children: [
    { path: 'users', component: UsersComponent},
    { path: 'questions', component: QuestionsComponent}
    ],canActivate: [BLockPassGuardFlatService]},
  {path: 'staff', component: StaffComponent,canActivate: [BLockPassGuardFlatService]},
  {path: '**', component: NoPageFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StaffComponent,
    LoginPageComponent,
    UsersComponent,
    QuestionsComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatTabsModule,MatFormFieldModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})

  ],
  providers: [BLockPassGuardFlatService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
