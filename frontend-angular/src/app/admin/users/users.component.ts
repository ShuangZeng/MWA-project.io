import { Component, OnInit, Pipe} from '@angular/core';
import { WebService } from '../../webService/web.service';
import { MatSlideToggleChange, MatSlideToggle } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
private allusers:any;
private staff;
private students;
  constructor(private webService: WebService,private alertService: AlertService) { }

  ngOnInit() {
      this.webService.getAllUsers().subscribe((data)=>{
        this.allusers = data
        this.staff = this.allusers.filter(this.isStaff);
        this.students = this.allusers.filter(this.isStudent)
      })
  }
  
  isStaff(element, index, array) {
  return element.role === 'staff'
  }

  isStudent(element, index, array){
return element.role === 'student'
  }

  onStatusChange(ob: MatSlideToggleChange, worker) {
    if (ob.checked){
      this.webService.updateIsActivestatusByUserId(worker._id,true).subscribe((res:any)=>{
        if(res.status === 200){
        this.alertService.warning(`${worker.name} is now active`)
        }
      })
    }else{
      this.webService.updateIsActivestatusByUserId(worker._id,false).subscribe((res:any)=>{
        if(res.status === 200){
          this.alertService.warning(`${worker.name} is now inactive`)
        }
      })

    }
  }

  onDelete(worker){
    if (confirm("Press a button!")) {
      console.log ("You pressed OK!");
    } else {
      console.log("You pressed Cancel!");
    }
  }

  onEdit(){

  } 
  
}
