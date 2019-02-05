import { Component, OnInit, Pipe} from '@angular/core';
import { WebService } from '../../webService/web.service';
import { MatSlideToggleChange, MatSlideToggle,MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig } from '@angular/material';
import { Subscriber, Subscription } from 'rxjs';
import { AlertService } from 'ngx-alerts';
import { StaffDialogComponent } from './staff-dialog/staff-dialog.component'
 @Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
private allusers:any;
private staff;
private students;
  constructor(private webService: WebService,private alertService: AlertService,private dialog: MatDialog) { }
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

  openStaffDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

  //   dialogConfig.data = {
  //     id: 1,
  //     title: 'Angular For Beginners'
  // };   
  
  const dialogRef = this.dialog.open(StaffDialogComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
      (data) => {
        this.alertService.info(`${data.name} has been added`);
        this.ngOnInit();
      } 
      //  console.log("Dialog output:", data)
  );

}


}
