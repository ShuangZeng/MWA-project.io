import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
    let token = JSON.parse(localStorage.getItem('usertoken'));
    if(!token){
      this.router.navigate(['/','/']); 
    }

    setTimeout( function(){

      localStorage.removeItem('usertoken');

  }, 20000 * 60)    }

  

}
