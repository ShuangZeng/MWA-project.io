import { Component, OnInit } from '@angular/core';
import { TokenInterceptorService } from '../webService/token-interceptor.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  text:string = "";
    options:any = {maxLines: 1000, printMargin: false};

    onChange(code) {
        console.log("new code", code);
    }
//   private name: string;
//   private token: string;
//   // private time = 7200;
//   constructor(private tokenService: TokenInterceptorService) {
//   }
// //   private p = document.getElementById('time');
// //   private set = setInterval(function() {
// //     time--;
// //     p.innerHtml = time;
// //     if(time === 0) {
// //       p.innerHTML = "";
// //       clearInterval(set);
// //   }
// // }, 1000);
// ngOnInit() {
//   this.token = this.tokenService.getToken();
//   this.name = this.tokenService.getToken().charAt(2);
// }

// initStudent() {
//   // initialize our items
//   // return this._fb.group({
//   //     session: ['', Validators.required],
//   //     studentList: ['']
//   // });
// }

// addStudent() {
// // add students to the list
// }

}
