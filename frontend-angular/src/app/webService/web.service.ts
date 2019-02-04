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

  getAllUsers(){
    return this.http.get('http://localhost:3000/users/all/')
  }
  getUsersByRole(role){
    return this.http.get('http://localhost:3000/users/role/',{params: role})
  }

  updateIsActivestatusByUserId(id,body){
    const obj = {isActive: body}
    return this.http.patch(`http://localhost:3000/users/${id}`, obj)
  }
 
  findByIdAndRemove(id){
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }
}
