import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
//alert module libs
import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
 

// const routes: Routes = [
//   { path: '', component: AppComponent }
// ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
