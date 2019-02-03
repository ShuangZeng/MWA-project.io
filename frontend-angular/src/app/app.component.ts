import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms'
import { Observable } from 'rxjs'
import {WebService} from './webService/web.service'
import { AlertService } from 'ngx-alerts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private webservice: WebService,private alertService: AlertService){
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
      console.log(data)
      if (data.status === 200){
        console.log(data);
        console.log('your are in', data.message)
        this.alertService.success('Welcome');

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

