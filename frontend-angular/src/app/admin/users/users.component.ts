import { Component, OnInit, Pipe} from '@angular/core';
import { WebService } from '../../webService/web.service';
import { MatSlideToggleChange, MatSlideToggle } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AlertService } from 'ngx-alerts';
import { Subscriber, Subscription } from 'rxjs';

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
private subscription: Subscription;
  ngOnInit() {
     this.subscription = this.webService.getAllUsers().subscribe((data)=>{
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
      this.subscription = this.webService.updateIsActivestatusByUserId(worker._id,true).subscribe((res:any)=>{
        if(res.status === 200){
        this.alertService.warning(`${worker.name} is now active`)
        }
      })
    }else{
      this.subscription =  this.webService.updateIsActivestatusByUserId(worker._id,false).subscribe((res:any)=>{
        if(res.status === 200){
          this.alertService.warning(`${worker.name} is now inactive`)
        }
      })
    
    }
  }

  onDelete(worker){
    if (confirm("Are you sure")) {
      this.subscription =  this.webService.findByIdAndRemove(worker._id).subscribe(
        res => {this.alertService.info(`${worker.name} has been removed`)}
      )
      console.log ("You pressed OK!");
    } else {
      console.log("You pressed Cancel!");
    }
  }

  onEdit(){

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
