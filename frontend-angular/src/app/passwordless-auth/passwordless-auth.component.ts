import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../webService/web.service';

@Component({
  selector: 'app-passwordless-auth',
  templateUrl: './passwordless-auth.component.html',
  styleUrls: ['./passwordless-auth.component.css']
})
export class PasswordlessAuthComponent implements OnInit {
usertoken :string
userid :string
private sub : any
  constructor(private route: ActivatedRoute, private studentAuthService:WebService, private router: Router) { }


  ngOnInit() {
  }

  startExam(){
    this.sub = this.route.params.subscribe(params => {
      this.usertoken = params['token']; // (+) converts string 'id' to a number
    

     const response =  this.studentAuthService.authStudent({'usertoken':this.usertoken})
      response.subscribe((data:any)=> {
        if (data.status === 400){
          // localStorage.removeItem('usertoken');
          console.log(data)
         
          this.router.navigate(['/','/']);  
        }else{
          this.router.navigate(['/','student']); 
        } 
        
          
      },
      (error)=> console.log(error));


      // In a real app: dispatch action to load the details here.
   });
  }

}
