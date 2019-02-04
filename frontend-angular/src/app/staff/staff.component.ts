import { Component, OnInit } from '@angular/core';
import {StudentService} from '../webService/staff.service'
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  
  users :object

  ngOnInit() {
    this.studentService.getUsers()
    .subscribe((response) => this.users = response,
    (error) => console.log(error) );
    
  }
  
  sendMail(user){
    console.log(user)
    this.studentService.updateUser(user)
    .subscribe((response) => console.log(response),
    (error) => console.log(error) );
  }

  // onGet(){
  //   this.studentService.getUsers()
  //   .subscribe((response) => console.log(response),
  //   (error) => console.log(error) );
  // }
  
 
  // onSave(){
  //   this.studentService.addUser(this.user)
  //   .subscribe((response) => console.log(response),
  //   (error) => console.log(error) );
  // }

}
