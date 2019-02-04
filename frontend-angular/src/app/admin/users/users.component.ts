import { Component, OnInit, Pipe} from '@angular/core';
import { WebService } from '../../webService/web.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
private allusers:any;
private staff;
private students;
  constructor(private webService: WebService) { }

  ngOnInit() {
      this.webService.getAllUsers().subscribe((data)=>{
        this.allusers = data
        this.staff = this.allusers.filter(this.isStaff);
        this.students = this.allusers.filter(this.isStudent)
    console.log(this.staff)
    console.log(this.students)
      })
  }
  
  isStaff(element, index, array) {
  return element.role === 'staff'
  }

  isStudent(element, index, array){
return element.role === 'student'
  }
}
