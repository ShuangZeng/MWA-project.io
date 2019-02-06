import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenInterceptorService } from '../webService/token-interceptor.service';
import { CommunicatorService } from '../webService/communicator.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentData:any;
  numOfQuestion: number;
  options:any = {maxLines: 1000, printMargin: false};
  
<<<<<<< HEAD


    onChange(code) {
        console.log("new code", code);
    }
  constructor(private router:Router,communicator: CommunicatorService) { 
    this.studentData = communicator.serviceData;
    console.log(this.studentData)

=======
    onChange(code) {
        console.log("new code", code);
    }

  constructor(private router:Router,communicator: CommunicatorService) { 
    this.studentData = communicator.serviceData;
    console.log(this.studentData)
>>>>>>> a7bd02288c05d351d3e9252c609e2fe98fe125e8

  }
  
  ngOnInit() {
    const token = JSON.parse(localStorage.getItem('usertoken'));
    if(!token){
      this.router.navigate(['/','/']); 
    }
    setTimeout(function(){
      localStorage.removeItem('usertoken');
  }, 20000 * 60)}
<<<<<<< HEAD
=======

>>>>>>> a7bd02288c05d351d3e9252c609e2fe98fe125e8

}
