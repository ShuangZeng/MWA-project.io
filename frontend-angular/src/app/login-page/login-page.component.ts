import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms'
import { Observable } from 'rxjs'
import {WebService} from '../webService/web.service'
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private webservice: WebService,private alertService: AlertService,private router: Router){
    this.myForm =  formBuilder.group({
      'loginData': formBuilder.group({
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'password': ['', Validators.required],
      })
    })

  }

  onSubmit() {
    const response = this.webservice.login(this.getEmail(),this.getPassword())
    response.subscribe((data:any)=>{
      if (data.status === 200){
        localStorage.setItem("usertoken", JSON.stringify(data.message))
        if (data.user.role === 'admin'){
          this.router.navigate(['/','admin']);
        }if(data.user.role === 'staff'){
            this.router.navigate(['/','staff'])
        } 
      }else{
        this.alertService.warning(data.message);
      }
    })
  }


getEmail() {
  return this.myForm.get('loginData').get('email').value
}

getPassword(){
  return this.myForm.get('loginData').get('password').value
}
}

