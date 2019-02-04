import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component'

import { AdminComponent }from './admin.component'
const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'users', component: UsersComponent},
  { path: 'questions', component: QuestionsComponent}

]

@NgModule({
  declarations: [UsersComponent, QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
