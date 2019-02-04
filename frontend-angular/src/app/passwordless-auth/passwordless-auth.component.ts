import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passwordless-auth',
  templateUrl: './passwordless-auth.component.html',
  styleUrls: ['./passwordless-auth.component.css']
})
export class PasswordlessAuthComponent implements OnInit {
usertoken :string
userid :string
private sub : any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.usertoken = params['token']; // (+) converts string 'id' to a number
      this.userid = params['userid']; 
      console.log(this.usertoken)
      console.log(this.userid)

      // In a real app: dispatch action to load the details here.
   });

   

  }

}
