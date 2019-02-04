import { Component, OnInit, Pipe} from '@angular/core';
import { WebService } from '../../webService/web.service';
import { MatSlideToggleChange, MatSlideToggle } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subscriber, Subscription } from 'rxjs';
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

  onStatusChange(ob: MatSlideToggleChange, obj) {
    if (ob.checked){
      this.subscription = this.webService.updateIsActivestatusByUserId(obj._id,true).subscribe((res:any)=>{
        if(res.status === 200){
        this.alertService.warning(`${obj.name} is now active`)
        }
      })
    }else{
      this.subscription =  this.webService.updateIsActivestatusByUserId(obj._id,false).subscribe((res:any)=>{
        if(res.status === 200){
          this.alertService.warning(`${obj.name} is now inactive`)
        }
      })
    
    }
  }

  onDelete(obj){
    if (confirm("Are you sure")) {
      this.subscription =  this.webService.findByIdAndRemove(obj._id).subscribe(
        res => {
          this.alertService.info(`${obj.name} has been removed`)}
      )
    } else {
      console.log("You pressed Cancel!");
    }
    this.ngOnInit();
  }

  onEdit(){

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
