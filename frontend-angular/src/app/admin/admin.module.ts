import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component'

import { AdminComponent }from './admin.component';
import { StaffDialogComponent } from './users/staff-dialog/staff-dialog.component';
import { StudentDialogComponent } from './users/student-dialog/student-dialog.component';

import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'users', component: UsersComponent},
  { path: 'questions', component: QuestionsComponent}
]

@NgModule({
  declarations: [UsersComponent, QuestionsComponent,StaffDialogComponent, StudentDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule { }

