import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }


  login(userEmail, userPassword){
    const user = {email: userEmail, password: userPassword};
    return this.http.post('http://localhost:3000/auth', user)
  }

}
